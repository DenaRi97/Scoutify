import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../service/users.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FooterComponent, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{
  formUser = new FormGroup({
      'username': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required]),
      'hiddenField': new FormControl('') // Agrega este control para el campo oculto
  });
  showAlert= false;
  alertMessage: string = '';
  AlertMessage = false

  //Alerta campos ocultos
  ngOnInit(): void {
    // Agrega un evento de detección de cambios en el campo oculto
    this.formUser.get('hiddenField')?.valueChanges.subscribe(value => {
      if (value !== '') {
        console.log('Alerta: Intento de relleno automático detectado en el campo oculto');
        this.alertMessage = '¡Alerta! Intento de relleno automático detectado en el campo oculto.';
        this.showAlert = true;
      }
    });
  }

  constructor(private router: Router, private userService: UsersService) {}

  navigateToHeroLanding() {
      this.router.navigate([""]);
  }

  navigateToAuthRegister() {
      this.router.navigate(["/register"])
  }

  navigateToHome() {
      this.router.navigate(["/home"])
  }

  // Custom function to check all fields have a value, correct or not
  areAllFieldsFilled(): boolean {
      const formValues = this.formUser.value as { [key: string]: string | null };
      for (const key in formValues) {
          if (formValues.hasOwnProperty(key)) {
              const value: string | null = formValues[key]; 
              if (!value) {
                  return false; 
              }
          }
      }
      return true; 
  }
showTermsError = false; 


onSubmit() {
    if (this.formUser.valid) {
      const credentials = {
        username: this.formUser.value.username,
        password: this.formUser.value.password
      };

      this.userService.loginUser(credentials).subscribe(
        (response: any) => {
          console.log('Login exitoso:', response);
          localStorage.setItem('token de admin', response.tokenLog);
          this.navigateToHome();
        },
        (error: any) => {
          console.error('Error en el login:', error);
          if (error.status === 400 && error.error.message === "Demasiados intentos fallidos, inténtelo de nuevo más tarde") {
              this.alertMessage = 'Demasiados intentos fallidos, inténtelo de nuevo más tarde';
              this.showAlert = true;
              // Desactivar el formulario
              this.formUser.disable();
            } else {
            this.alertMessage = 'Error en usuario/contraseña';
            this.showAlert = true;
          }
        }
      );
    } else {
      this.alertMessage = 'Por favor, complete todos los campos correctamente.';
      this.showAlert = true;
    }
  }
}