import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VacinasService } from '../vacinas.service';

@Component({
  selector: 'app-vacinas-register',
  templateUrl: './vacinas-register.page.html',
  styleUrls: ['./vacinas-register.page.scss'],
})
export class VacinasRegisterPage implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private vacinasService: VacinasService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [''],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      eficacia: ['', Validators.required],
      tecnologia: ['', [Validators.required, Validators.minLength(3)]],
      doses: ['', Validators.required],
      intervalo: ['', Validators.required],
    });

    const id = +this.activatedRoute.snapshot.params.id;
    const vacina = this.vacinasService.findById(id);  
    this.form.patchValue({...vacina,}); 
  }

  salvar() {
    this.vacinasService.save(this.form.value);
    this.router.navigate(['vacinas-list']);
  }
}
