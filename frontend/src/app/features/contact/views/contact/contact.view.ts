import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.view.html',
  styleUrls: ['./contact.view.scss']
})
export class ContactView implements OnInit {

  formBuilder!: FormGroup;

  title: string = 'Contact';

  constructor(
    private titleService: Title,
    private toastr: ToastrService
  ) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit(): void {
    this.formBuilder = new FormGroup({
      name: new FormControl(undefined ,[Validators.required, Validators.minLength(3)]),
      email: new FormControl(undefined, [Validators.required, Validators.email]),
      message: new FormControl(undefined, Validators.required),
    });
  }

  onSubmit() {
    this.toastr.success('Your message was sent', 'Success');
    console.log(this.formBuilder.get('name')?.errors);
    this.formBuilder.reset();
    
  }

  getErrorMessage(form: FormGroup, fieldName: string): string {
    if(!!form.get(fieldName)?.errors?.required) {
      return 'Required field.';
    }
    else if (!!form.get(fieldName)?.errors?.email) {
      return 'Must be a valid email.';
    }
    else if (!!form.get(fieldName)?.errors?.minlength) {
      const { requiredLength } = form.get(fieldName)?.errors?.minlength;
      return `Must be at least ${requiredLength} characters.`;
    }
    else if (!!form.get(fieldName)?.errors?.minlength) {
      const { requiredLength } = form.get(fieldName)?.errors?.maxlength;
      return `Must have a maximum of ${requiredLength} characters.`;
    }
    else {
      return '';
    }
  }

  hasError(form: FormGroup, fieldName: string): boolean {
    return (form.get(fieldName)?.touched && form.get(fieldName)?.invalid) ?? false;
  }

}
