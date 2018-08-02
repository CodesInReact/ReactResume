import {Service} from 'react-services-injector';

let Ax = require('axios');
class RegisterService extends Service
{
    constructor() {
        super();

        this.HasSubmit = false;
    }
    serviceDidConnect()
    {

    }
    get Submitted()
    {
        return this.HasSubmit;
    }
    Submit(FormData){
        Ax.post('/form.php',FormData)
            .then(function (response) {
                this.HasSubmit = true;
            })
            .catch(function (error) {
                debugger;
                console.log(error);
                this.HasSubmit = false;
            })

    }

}
RegisterService.publicName = 'RegisterService';
export default RegisterService;
