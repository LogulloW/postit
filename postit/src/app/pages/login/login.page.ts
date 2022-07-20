import { Component, OnInit } from '@angular/core';
import { ToastController,AlertController } from '@ionic/angular';
import { LoginPayload } from 'src/app/models/payload/login.payload';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(
    private readonly helper: HelperService,
  ) {}

  public loginPayload: LoginPayload = {
    email: '',
    password: '',
  }

  public isLoading: boolean = false ;

  public async login(): Promise<void> {
    if(!this.canLogin())
    return;

    this.isLoading = true;

    //toast
    await this.helper.showToast('Carregando...');

    //alert
    await this.helper.showAlert('Login/Senha Incorreto !!', [
      {
        text: 'Esqueci minha senha',
        handler: () => console.log('Ok'),
      },
      {
        text: 'Tentar novamente',
        handler: () => console.log('Ok'),
      }
    ]);

    console.log(this.loginPayload);
  }

  //regex email
  public canLogin(): boolean{
    const regex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'
    );

    const emailIsValid = regex.test(this.loginPayload.email)

    if (emailIsValid && this.loginPayload.password.length >= 6)
    return true;

    return false;
  }
  
  // logo click
  public logoClick($event: boolean): void {
    console.log($event);
    //console.log('Você clicou no logo');
  }
}
