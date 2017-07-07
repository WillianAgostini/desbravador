class UserDetails {

    constructor(numeroDeSeguidores, numeroDeSeguidos, imagemDoAvatar, e_mail, bio, login) {
        this.numeroDeSeguidores = numeroDeSeguidores;
        this.numeroDeSeguidos = numeroDeSeguidos;
        this.imagemDoAvatar = imagemDoAvatar;
        this.e_mail = e_mail;
        this.bio = bio;
        this.login = login;

        Object.freeze(this);
    }


}