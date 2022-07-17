import { Injectable } from "@angular/core";
import { ToastController,AlertController } from "@ionic/angular";

@Injectable({
    providedIn: 'root',
})
/**
 * Serviço que me ajuda a enviar feeedbacks para o usuário
 */
export class HelperService {
    constructor(
        private readonly toastController: ToastController,
        private readonly alertController: AlertController,
    ){}

    //Toast
    public async showToast(message: string, duration: number = 2000): Promise<void> {
        const toast = await this.toastController.create({
            message: message,
            duration: duration,
        });
      
          toast.present();
    }
    //Alert
    public async showAlert(header: string, text: string ):  Promise<void>{
    const alert = await this.alertController.create({
        header: header,
        buttons: [
          {
            text: text,
            handler: () => { location.reload()}
          }
        ]
      });
      alert.present();
}
}