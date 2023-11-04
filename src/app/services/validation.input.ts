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
      { type: 'required', message: 'Champs requis.' },
      { type: 'pattern', message: 'En valide svp' }
    ],
    'tel': [
      { type: 'required', message: 'Telephone is required.' },
      { type: 'pattern', message: 'Enrer un numero tel valide !!!' }
    ],
    'numpermis': [
      { type: 'pattern', message: 'Entrer un numero de permis valide svp' }
    ],
    'username': [
      { type: 'pattern', message: 'Entrer un numero de permis valide svp' }
    ],
    'adresse': [
      { type: 'pattern', message: 'Entrer un numero de permis valide svp' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 6 characters long.' }
    ],
    'passwordcofirm': [
      { type: 'required', message: 'Password confirmation required.' },
      { type: 'minlength', message: 'Password must be at least 6 characters long.' }
    ]
  };