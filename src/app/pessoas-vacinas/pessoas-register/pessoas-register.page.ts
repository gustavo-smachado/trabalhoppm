import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Genero } from '../pessoas.model';
import { PessoasService } from '../pessoas.service';

@Component({
  selector: 'app-pessoas-register',
  templateUrl: './pessoas-register.page.html',
  styleUrls: ['./pessoas-register.page.scss'],
})
export class PessoasRegisterPage implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private pessoasService: PessoasService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [''],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      genero: [Genero.MASCULINO, Validators.required],
      endereco: ['', [Validators.required, Validators.minLength(3)]],
      nascimento: [''],
      observacao: ['', [Validators.required, Validators.minLength(3)]],
    });

    const id = +this.activatedRoute.snapshot.params.id;
    const pessoa = this.pessoasService.findById(id);
    this.form.patchValue({...pessoa,}); 
  }

  salvar() {
    this.pessoasService.save(this.form.value);
    this.router.navigate(['pessoas-list']);
  }
}
