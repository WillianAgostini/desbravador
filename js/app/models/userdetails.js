class UserDetails {

    constructor(numeroDeSeguidores, numeroDeSeguidos, imagemDoAvatar, email, bio, login) {
        this.numeroDeSeguidores = numeroDeSeguidores;
        this.numeroDeSeguidos = numeroDeSeguidos;
        this.imagemDoAvatar = imagemDoAvatar;
        this.email = email;
        this.bio = bio;
        this.login = login;

        Object.freeze(this);
    }


}