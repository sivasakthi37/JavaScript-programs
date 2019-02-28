/**
 * @description:This utility file is used to store all bussiness login regating oops program...
 */
const readline = require('readline-sync');
const file = require('fs');
class Reg {
    /**
     * @param {name} name 
     * @param {id} id
     * @param {symbol} symbol 
     * @param {phnumber} phnumber 
     */
    constructor(name, id, symbol, phnumber) {
        this.name = name;
        this.id = id;
        this.symbol = symbol;
        this.phnumber = phnumber;
    }
}
var regs = [];
var patient1 = [];
module.exports = {
    /**
     * @description:This method is used to change the perticular template from the string..
     * @param {name} name 
     * @param {fullname} fullname 
     * @param {mobileno} mob 
     */
    regex(name, fullname, mob) {
        var st1 = "Hello <<name>>,\nWe have your full name as <<full name>> in our system.\nyour contact number is 91-xxxxxxxxxx. \nPlease,let us know in case of any clarification \nThank you BridgeLabz 01/01/2016. ";


        var st1 = st1.replace('<<name>>', name);

        st1 = st1.replace('<<full name>>', fullname);

        st1 = st1.replace('xxxxxxxxxx', mob);

        var data = new Date().toLocaleDateString();
        st1 = st1.replace('01/01/2016', data);

        console.log(st1);
    },
/**
 * @description :This method is used to Register the user in the Clinique..
 */
    regester() {
        try {
            /**
             * @description:get the details from the user to fill the registratin form..
             */
            var name = readline.question("Enter your name ");
            if (!isNaN(name)) throw "PLZ ENTER STRING";
            var id = readline.question("Enter your ID ");
            if (isNaN(id)) throw "PLZ ENTER NUMBER";

            var age = readline.question("Enter your Age ");
            if (isNaN(age)) throw "PLZ ENTER number";
            var phnumber = readline.question("Enter your phnumber ");
            if (phnumber.length > 10 || phnumber.length < 10) throw "PLZ ENTER VALID PH NUMBER"
            //  if (mob.length < 10 || 10 < mob.length) throw "PLZ ENTER VALID PHONE NUMBER";
            if (isNaN(phnumber)) throw "PLZ ENTER NUMBER";

            var reg = new Reg(name, id, age, phnumber);
            // console.log(reg);

            regs.push(reg);
            var paitent = this.getdatafrompatientsjson();
            console.log(regs);

            paitent.patients.push(reg);

            file.writeFileSync('/home/brideit/Documents/SivaSakthi/oops/Jsonfiles/Paitents.json', JSON.stringify(paitent));
            console.log("SUCESSFULLY REGESTERED");


        }
        catch (err) {
            console.log("ERROR :" + err);
            this.regester();

        }
    },
    /**
     * @description: get the data from the patient json file..
     */
    getdatafrompatientsjson() {
        var Paitent = file.readFileSync('/home/brideit/Documents/SivaSakthi/oops/Jsonfiles/Paitents.json');
        var Paitents = JSON.parse(Paitent);
        return Paitents;
    },
    /**
     * @description:get the data from the doctor json file..
     */
    getdatafromdoctorjson() {
        var doctor = file.readFileSync('/home/brideit/Documents/SivaSakthi/oops/Jsonfiles/Doctor.json');
        var doctors = JSON.parse(doctor);
        return doctors;
    },
    /**
     * @description:write the data from the doctor json file..
     * @param {script} data 
     */
    writedatafromdoctorjson(data) {
        var data1 = JSON.stringify(data);
        file.writeFileSync('/home/brideit/Documents/SivaSakthi/oops/Jsonfiles/Doctor.json', data1);

    },
    /**
     * @description:Show doctor details to user.
     */
    doctordetails() {
        console.log("--------------------------DOCTOR DETAILS-----------------------");
        var doctors = this.getdatafromdoctorjson();
        for (const key in doctors.doctors) {
                  console.log(JSON.stringify( doctors.doctors[key]));
                  console.log();
                  
        }
        
    },
    /**
     * @description:Show paitent details to the patient..
     */
    paitentdetails() {
        console.log("--------------------------Paitent DETAILS-----------------------");
        var patients = this.getdatafrompatientsjson();
        console.log(patients);
    },
    /**
     * @description:TO store the appointment details to the doctor file...
     * @param {user id} id 
     */
    appointment(id) {
        var patient = this.getdatafrompatientsjson();
        for (const key in patient.patients) {

            if (patient.patients[key].id == id) {
                patient1.push(patient.patients[key]);
            }
        }
        var doctor = this.getdatafromdoctorjson();
        console.log("--------------------------DOCTOR DETAILS-----------------------");
        for (const key in doctor.doctors) {

            console.log(JSON.stringify(doctor.doctors[key]));
            console.log();

        }
        // console.log(JSON.stringify(doctor));

        var did = readline.question("Enter the doctor id ");
        var f = 1, r = 1;
        for (const key in doctor.doctors) {
            if (doctor.doctors[key].id == did) {
                console.log("doctor file");
                r = 0;
                if (doctor.doctors[key].appoimentpatients.length < 5) {
                    f = 0;
                    doctor.doctors[key].no_of_paitents = doctor.doctors[key].no_of_paitents - 1;
                    doctor.doctors[key].appoimentpatients.push(patient1);
                    this.writedatafromdoctorjson(doctor);
                    console.log("YOUR DETAILS ADDED IN DOCTOR FILE..");
                }
            }
        }
        if (f == 1) {
            console.log("PER DAY ONLY 5 PATIENTS ARE AVILABLE YOU TRY NEXT DAY..");

        }
        if (r == 1) {
            console.log("YOUR DOCTOR ID IS NOT MATCHING OLZ ENTER MACHING ID");
            this.appointment();
        }

    }
}
/* Commercial(costomer,company) {
     var q = readline.question("Are You new Costomer ? if YES PRESS 1.. IF NO Press 2..");
     if (q == 1) {
         var ph = readline.question("ENter the id number ");


         for (let i = 0; i < costomer.user.length; i++) {
            /* console.log(ph + "==>" + costomer.user[i].phnumber);
             console.log(ph == costomer.user[i].phnumber);

if (ph == costomer.user[i].id) {
    this.purchase(costomer, company);
}
            }

        }
    },
purchase(costomer, company) {
    console.log("----Company Shareholders----");

    for (const key in company.shareholders) {
        console.log(company.shareholders[key]);

    }


}*/








