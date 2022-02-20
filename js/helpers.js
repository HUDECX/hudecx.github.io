export function sendEmail(name,email,subject,body){
    return Email.send({
        Host : "smtp.gmail.com",
        Username : "hudec.richard6@gmail.com",
        Password : "mvzqboslrwfihkmg",
        To : 'hudec.richard6@gmail.com',
        From : "hudec.richard6@gmail.com",
        Subject : `${subject}`,
        Body : `Name: ${name} <br/> E-mail: ${email} <br/> Message: ${body}`
    });
}