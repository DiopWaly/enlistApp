export const validation_messages = {
    'firstName': [
      { type: 'required', message: 'Prenom est obligatoire.' },
      { type: 'pattern', message: 'Entrer un prenom valide svp' }
    ],
    'lastName': [
      { type: 'required', message: 'Nom est obligatoire.' },
      { type: 'pattern', message: 'Entrer un nom valide svp' }
    ],
    'datenaissance': [
      { type: 'required', message: 'Obligatoire' }
    ],
    'lieunaissance': [
      { type: 'required', message: 'Champs obligatoire.' },
      { type: 'pattern', message: 'En valide svp' }
    ],
    'tel': [
      { type: 'required', message: 'Téléphone est obligatoire.' },
      { type: 'pattern', message: 'Enrer un numéro tel valide !!!' }
    ],
    'numpermis': [
      { type: 'pattern', message: 'Entrer un numéro de permis valide svp' }
    ],
    'username': [
      { type: 'pattern', message: 'Entrer un numéro de permis valide svp' }
    ],
    'adresse': [
      { type: 'pattern', message: 'Entrer un numéro de permis valide svp' }
    ],
    'email': [
      { type: 'required', message: 'Email est obligatoire.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Mot de passe obligatoire.' },
      { type: 'minlength', message: 'Password must be at least 6 characters long.' }
    ],
    'passwordcofirm': [
      { type: 'required', message: 'Password confirmation required.' },
      { type: 'minlength', message: 'Password must be at least 6 characters long.' }
    ],
    'merchantTitle': [
        { type: 'required', message: 'Intitulé obligatoire.' },
        { type: 'pattern', message: 'Entrer un intitulé valide svp' }
    ],
    'merchantCode': [
        { type: 'required', message: 'Code marchand obligatoire.' },
        { type: 'pattern', message: 'Entrer un code marchand valide svp'}
    ],
  };