import { Component, OnInit } from '@angular/core';
import { ToastController,AlertController } from '@ionic/angular';
import { LoginPayload } from 'src/app/models/payload/login.payload';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(
    private readonly toastController: ToastController,
    private readonly alertController: AlertController,
  ) {}

  public loginPayload: LoginPayload = {
    email: '',
    password: '',
  }

  public isLoading: boolean = false ;

  public async login(): Promise<void> {
    this.isLoading = true;

    //toast
    const toast = await this.toastController.create({
      message: 'Logando...',
      duration: 5000
  });

    toast.present();

    //alert
    const alert = await this.alertController.create({
      header: 'Login/Senha incorreto !',
      buttons: [
        {
          text: 'OK',
          handler: () => { console.log('Login/Senha incorreto')}
        }
      ]
    });
    alert.present();

    console.log(this.loginPayload);
  }
  public canLogin(): boolean{
    const regex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'
    );

    const emailIsValid = regex.test(this.loginPayload.email)

    if (emailIsValid && this.loginPayload.password.length >= 6)
    return true;

    return false;
  }

  public logoClick($event: boolean): void {
    console.log($event);
    //console.log('Você clicou no logo');
  }
}
