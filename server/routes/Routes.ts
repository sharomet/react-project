import config from '../config/config.json'
import { UserController } from '../controllers/'

export class Routes {

    public userController: UserController = new UserController();

    public index(app: any): void {
        app.route(config.apiUrl + '/users').get(this.userController.getUser);
        //app.route('/api/user/:id').get(this.userController.getUserById);
    }

}