const data = {
  name: 'Yago Togami',
  player: 'Resiak',
  occupation: 'Atleta',
  age: 24,
  sex: 'male',
  birthplace: 'São paulo',
  residence: 'São paulo',

  life: {
    current: 12,
    max: 14,
  },
  sanity: {
    current: 65,
    max: 66,
  },

  lifeo: {
    current: 11,
    max: 11,
  },

  weapons: [
    {
      name: 'Balestra',
      type: 'Arco',
      damage: '1d20',
      numCurrent: 1,
      numMax: 1,
      attack: 5,
      reach: '10 m',
      defect: 1,
      area: '',
    },
    {
      name: 'Canivete',
      type: 'Briga',
      damage: '1d10',
      numCurrent: '',
      numMax: '',
      attack: '1/2',
      reach: '',
      defect: 1,
      area: '',
    },
  ],
  attributes: [
    {
      type: 'Força',
      amount: 12,
    },
    {
      type: 'Destreza',
      amount: 13,
    },
    {
      type: 'Constituição',
      amount: 18,
    },
    {
      type: 'Aparência',
      amount: 4,
    },
    {
      type: 'Poder',
      amount: 11,
    },
    {
      type: 'Sorte',
      amount: 11,
    },
    {
      type: 'Inteligência',
      amount: 14,
    },
    {
      type: 'Educação',
      amount: 15,
    },
    {
      type: 'Movimento',
      amount: 9,
    },
    {
      type: 'Tamanho',
      amount: 11,
    },
  ],

  pericias: [

    {
    type:'Espingardas',
    amount:'17',
    },
    
    {
    type:'Lutar(Briga)',
    amount:'14',
    },
    
    
    {
    type:'Arremessar',
    amount:'14',
    },
    
    
    {
    type:'Pulo',
    amount:'14',
    },
    
    
    {
    type:'Nadar',
    amount:'12',
    },
    
    {
    type:'Escalar',
    amount:'12',
    },
    
    {
    type:'Dirigir',
    amount:'11',
    },
    
    
    {
    type:'Agarrar',
    amount:'5',
    },
    
    
    {
    type:'Furtividade',
    amount:'8',
    },
    
    
    {
    type:'Ocultar',
    amount:'3',
    },
    
    {
    type:'Fotografia',
    amount:'5',
    },
    
    {
    type:'Escutar',
    amount:'9',
    },
    
    
    {
    type:'Encontrar',
    amount:'10',
    },
    
    
    {
    type:'História',
    amount:'5',
    },
    
    
    {
    type:'Investigar',
    amount:'10',
    },
    
    {
    type:'Chicotes',
    amount:'5',
    },
    
    {
    type:'1°s Socorros',
    amount:'10',
    },
    
    
    {
    type:'Pesq.Biblioteca',
    amount:'5',
    },
    
    
    {
    type:'Persuadir',
    amount:'3',
    },
    
    
    {
    type:'Lábia',
    amount:'1',
    },
    
    {
    type:'Intimidar',
    amount:'1',
    },
    
    {
    type:'Barganha',
    amount:'3',
    },
    
    
    {
    type:'Crédito',
    amount:'3',
    },
    
    
    {
    type:'Psicologia',
    amount:'7',
    },
    
    
    {
    type:'Dirigir Automóveis',
    amount:'8',
    },
    
    {
    type:'Usar Arco',
    amount:'5',
    },
    
    
    {
    type:'Usar Pistola',
    amount:'13',
    },
    
    
    {
    type:'Lutar Machado',
    amount:'5',
    },
    
    
    {
    type:'Geologia',
    amount:'5',
    },
    
    
    {
    type:'Contabilidade',
    amount:'2',
    },
    
    {
    type:'Medicina',
    amount:'7',
    },
    
    {
    type:'Direito',
    amount:'2',
    },
    
    
    {
    type:'Quimica',
    amount:'1',
    },
    
    
    {
    type:'Antropologia',
    amount:'1',
    },
    
    
    {
    type:'Arqueologia',
    amount:'1',
    },
    
    
    
    
    
    
    {
    type:'Farmácia',
    amount:'1',
    },
    
    {
    type:'Astronomia',
    amount:'1',
    },
    
    
    {
    type:'Biologia',
    amount:'1',
    },
    
    
    {
    type:'Chaveiro',
    amount:'1',
    },
    
    
    {
    type:'Disfarce',
    amount:'1',
    },
    
    {
    type:'Geologia',
    amount:'1',
    },
    
    {
    type:'Eletrônica',
    amount:'1',
    },
    
    
    {
    type:'Física',
    amount:'1',
    },
    
    
    {
    type:'Pilotar',
    amount:'1',
    },
    
    
    {
    type:'Psiconálise',
    amount:'3',
    },
    
    {
    type:'Usar Computadores',
    amount:'1',
    },
    
    {
    type:'Mecanico',
    amount:'4',
    },
    
    
    {
    type:'Arte',
    amount:'3',
    },
    
    
    {
    type:'Ratrear',
    amount:'2',
    },
    
    {
    type:'Ocultismo',
    amount:'3',
    },
    

    ],
}

data.weapons.map((weapon, index) => {
  addWeaponToTable(weapon, index)
})

data.attributes.map((attribute, index) => {
  addAttribute(attribute, index)
})

data.pericias.map((pericia, index) => {
  addpericia(pericia, index)
})




$('#name').val(data.name)
$('#player').val(data.player)
$('#occupation').val(data.occupation)
$('#age').val(data.age)
$('#sex').val(data.sex)
$('#birthplace').val(data.birthplace)
$('#residence').val(data.residence)

$('.lifeBar').css('width', `${calculateBar(data.life.current, data.life.max)}%`)
$('#lifeCount').text(`${data.life.current}/${data.life.max}`)
$('#lifeCurrent').val(data.life.current)
$('#lifeMax').val(data.life.max)

$('.lifeBaro').css('width', `${calculateBar(data.lifeo.current, data.lifeo.max)}%`)
$('#lifeCounto').text(`${data.lifeo.current}/${data.lifeo.max}`)
$('#lifeCurrento').val(data.lifeo.current)
$('#lifeMaxo').val(data.lifeo.max)

$('.sanityBar').css(
  'width',
  `${calculateBar(data.sanity.current, data.sanity.max)}%`
)
$('#sanityCount').text(`${data.sanity.current}/${data.sanity.max}`)
$('#sanityCurrent').val(data.sanity.current)
$('#sanityMax').val(data.sanity.max)


const diceModal = $('#diceAttributes')
const lifeModal = $('#lifeModal')
const lifeModalo = $('#lifeModalo')
const sanityModal = $('#sanityModal')

$(window).click(function (event) {
  if (event.target.id == 'diceAttributes') {
    diceModal.css('display', 'none')
    $('#diceNumber').text('')
    $('#diceType').text('')

    $('.modalDice').css('transform', 'rotate(0deg)')
    $('.modalDice').css('-webkit-transform', 'rotate(0deg)')
  } else if (event.target.id == 'lifeModal') {
    lifeModal.css('display', 'none')
  } else if (event.target.id == 'lifeModalo') {
    lifeModalo.css('display', 'none')
  }
   else if (event.target.id == 'sanityModal') {
    sanityModal.css('display', 'none')
  } else if (event.target.id == 'addWeaponModal') {
    closeModal('#addWeaponModal')
  }
})

function rollAtribute(atribute, amount) {
  console.log(this)



  diceModal.css('display', 'block')

  setTimeout(() => {
    $('.modalDice').css('transform', 'rotate(360deg)')
    $('.modalDice').css('-webkit-transform', 'rotate(360deg)')
  }, 1000)

  setTimeout(() => {
    $('.sanityDice').css('transform', 'rotate(360deg)')
    $('.sanityDice').css('-webkit-transform', 'rotate(360deg)')
  }, 1000)

  

  setTimeout(() => {
    const diceNumber = rollDice('1d20')
    const diceType = calcDice(amount, diceNumber)
    $('#diceNumber').text(diceNumber)
    $('#diceType').text(diceType)

    setTimeout(() => {
      diceModal.css('display', 'none')
      $('#diceNumber').text('')
      $('#diceType').text('')

      $('.modalDice').css('transform', 'rotate(0deg)')
      $('.modalDice').css('-webkit-transform', 'rotate(0deg)')
    }, 20000)
  }, 2000)
}





$('.lifeBar').click(function () {
  console.log(this)
  lifeModal.css('display', 'block')
})

$('.lifeBaro').click(function () {
  console.log(this)
  lifeModalo.css('display', 'block')
})

$('.sanityBar').click(function () {
  console.log(this)
  sanityModal.css('display', 'block')
})

$('#addWeapon').click(function () {
  openModal('#addWeaponModal')
})




$('#lesion').change(function () {
  if (this.checked) {
    console.log('Modo lesionamento grave ativado!')
  } else {
    console.log('Modo lesionamento grave desativado!')
  }
})

$('#injury').change(function () {
  if (this.checked) {
    console.log('Modo lesionamento ativado!')
  } else {
    console.log('Modo lesionado desativado!')
  }
})

$('#dying').change(function () {
  if (this.checked) {
    console.log('Modo morrendo ativado!')
  } else {
    console.log('Modo morrendo desativado!')
  }
})

$('#traumatized').change(function () {
  if (this.checked) {
    console.log('Modo traumatizado ativado!')
  } else {
    console.log('Modo traumatizado desativado!')
  }
})

$('#crazed').change(function () {
  if (this.checked) {
    console.log('Modo enlouquecido ativado!')
  } else {
    console.log('Modo enlouquecido desativado!')
  }
})

$('#addWeaponForm').submit(function (event) {
  var weaponType = ''

  if ($('#weaponType').val() == 'fire') {
    weaponType = 'Fogo'
  } else if ($('#weaponType').val() == 'arch') {
    weaponType = 'Arco'
  } else if ($('#weaponType').val() == 'fight') {
    weaponType = 'Briga'
  } else if ($('#weaponType').val() == 'ritual') {
  weaponType = 'Ritual'
}

  const weapon = {
    name: $('#weaponName').val(),
    type: weaponType,
    damage: $('#weapondamage').val(),
    numCurrent: $('#weaponNumCurrent').val(),
    numMax: $('#weaponNumMax').val(),
    attack: $('#weaponAttack').val(),
    reach: $('#weaponReach').val(),
    defect: $('#weaponDefect').val(),
    area: $('#weaponArea').val(),
  }

  data.weapons.push(weapon)
  const id = data.weapons.length - 1
  addWeaponToTable(weapon, id)

  closeModal('#addWeaponModal')
  event.preventDefault()
})

$('#changeLife').submit(function (event) {
  let current = Number($('#lifeCurrent').val())
  const max = Number($('#lifeMax').val())

  if (current > max) {
    alert('A vida atual não pode ser maior que a maxima!')
    current = max
  }

  data.life.current = current
  data.life.max = max
  $('.lifeBar').css('width', `${calculateBar(current, max)}%`)
  $('#lifeCount').text(`${current}/${max}`)

  closeModal('#lifeModal')
  event.preventDefault()
})

$('#changeLifeo').submit(function (event) {
  let current = Number($('#lifeCurrento').val())
  const max = Number($('#lifeMaxo').val())

  if (current > max) {
    alert('A vida atual não pode ser maior que a maxima!')
    current = max
  }

  data.lifeo.current = current
  data.lifeo.max = max
  $('.lifeBaro').css('width', `${calculateBar(current, max)}%`)
  $('#lifeCounto').text(`${current}/${max}`)

  closeModal('#lifeModalo')
  event.preventDefault()
})

$('#changeSanity').submit(function (event) {
  let current = Number($('#sanityCurrent').val())
  const max = Number($('#sanityMax').val())

  if (current > max) {
    alert('A sanidade atual não pode ser maior que a maxima!')
    current = max
  }

  data.sanity.current = current
  data.sanity.max = max
  $('.sanityBar').css('width', `${calculateBar(current, max)}%`)
  $('#sanityCount').text(`${current}/${max}`)

  closeModal('#sanityModal')
  event.preventDefault()
})

function calculateBar(current, max) {
  if (current > max) {
    return 100
  } else if (current < 0) {
    return 0
  } else {
    const value = (100 / max) * current
    const string = value.toString().split('.')[0]
    const percentage = Number(string)
    return percentage
  }
}

function calcDice(ability, dice) {
  // Não encontrei uma forma mais fácil, então fiz assim

  const table = [
    { normal: 20 },
    { normal: 19, good: 20 },
    { normal: 18, good: 20 },
    { normal: 17, good: 19 },
    { normal: 16, good: 19, extreme: 20 },
    { normal: 15, good: 18, extreme: 20 },
    { normal: 14, good: 18, extreme: 20 },
    { normal: 13, good: 17, extreme: 20 },
    { normal: 12, good: 17, extreme: 20 },
    { normal: 11, good: 16, extreme: 19 },
    { normal: 10, good: 16, extreme: 19 },
    { normal: 9, good: 16, extreme: 19 },
    { normal: 8, good: 15, extreme: 19 },
    { normal: 7, good: 14, extreme: 19 },
    { normal: 6, good: 14, extreme: 18 },
    { normal: 5, good: 13, extreme: 18 },
    { normal: 4, good: 13, extreme: 18 },
    { normal: 3, good: 12, extreme: 18 },
    { normal: 2, good: 12, extreme: 18 },
    { normal: 2, good: 11, extreme: 17 },
    { normal: 2, good: 11, extreme: 17 },
    { normal: 2, good: 11, extreme: 17 },
    { normal: 2, good: 11, extreme: 17 },
    { normal: 2, good: 10, extreme: 17 },
    { normal: 2, good: 10, extreme: 16 },
    { normal: 2, good: 9, extreme: 16 },
    { normal: 2, good: 9, extreme: 16 },
    { normal: 2, good: 8, extreme: 16 },
    { normal: 2, good: 8, extreme: 16 },
    { normal: 2, good: 7, extreme: 15 },
    { normal: 2, good: 7, extreme: 15 },
    { normal: 2, good: 6, extreme: 15 },
    { normal: 2, good: 6, extreme: 15 },
    { normal: 2, good: 5, extreme: 15 },
    { normal: 2, good: 5, extreme: 14 },
    { normal: 2, good: 4, extreme: 14 },
    { normal: 2, good: 4, extreme: 14 },
    { normal: 2, good: 3, extreme: 14 },
    { normal: 2, good: 3, extreme: 14 },
    { normal: 2, good: 2, extreme: 13 },
    { normal: 2, good: 2, extreme: 13 },
    { normal: 2, good: 2, extreme: 13 },
    { normal: 2, good: 2, extreme: 13 },
    { normal: 2, good: 2, extreme: 13 },
    { normal: 2, good: 2, extreme: 12 },
    { normal: 2, good: 2, extreme: 12 },
    { normal: 2, good: 2, extreme: 12 },
    { normal: 2, good: 2, extreme: 12 },
    { normal: 2, good: 2, extreme: 12 },
    { normal: 2, good: 2, extreme: 11 },
    { normal: 2, good: 2, extreme: 11 },
    { normal: 2, good: 2, extreme: 11 },
    { normal: 2, good: 2, extreme: 11 },
    { normal: 2, good: 2, extreme: 11 },
    { normal: 2, good: 2, extreme: 10 },
    { normal: 2, good: 2, extreme: 10 },
    { normal: 2, good: 2, extreme: 10 },
    { normal: 2, good: 2, extreme: 10 },
    { normal: 2, good: 2, extreme: 10 },
    { normal: 2, good: 2, extreme: 9 },
    { normal: 2, good: 2, extreme: 9 },
    { normal: 2, good: 2, extreme: 9 },
    { normal: 2, good: 2, extreme: 9 },
    { normal: 2, good: 2, extreme: 8 },
    { normal: 2, good: 2, extreme: 8 },
    { normal: 2, good: 2, extreme: 8 },
    { normal: 2, good: 2, extreme: 8 },
    { normal: 2, good: 2, extreme: 8 },
    { normal: 2, good: 2, extreme: 7 },

   
    
  ]

  const type = table[ability - 1]

  if (type.extreme) {
    if (dice >= type.extreme) return 'Extremo'
    if (dice >= type.good) return 'Sucesso Bom'
    if (dice >= type.normal) return 'Sucesso Normal'
    if (dice <= type.normal) return 'Fracasso'
  } else if (type.good) {
    if (dice >= type.good) return 'Sucesso Bom'
    if (dice >= type.normal) return 'Sucesso Normal'
    if (dice <= type.normal) return 'Fracasso'
  } else if (type.normal) {
    if (dice >= type.normal) return 'Sucesso Normal'
    if (dice <= type.normal) return 'Fracasso'

}

}

function rollDice(dice) {
  let [count, max] = dice.split('d')

  if (Number(count) && Number(max)) {
    count = Number(count)
    max = Number(max)

    let total = 0

    for (let i = 0; i < count; i++) {
      total += Math.floor(Math.random() * max + 1)
    }

    return total
  } else {
    return null
  }
}

function openModal(modal) {
  const Modal = $(modal)
  Modal.css('display', 'block')
}

function closeModal(modal) {
  const Modal = $(modal)
  Modal.css('display', 'none')
}

function addWeaponToTable(weapon, id) {
  const newWeapon = $(`<tr id="weapon_${id}">
        <td>
            <button onclick="deleteWeapon(${id})">
                <i class="fa fa-trash-o trashcan"></i>
            </button>
            ${weapon.name}
        </td>
        <td>${weapon.type}</td>
        <td>${weapon.damage}</td>
        <td>${weapon.numCurrent}</td>
        <td>${weapon.numMax}</td>
        <td>${weapon.attack}</td>
        <td>${weapon.reach}</td>
        <td>${weapon.defect}</td>
        <td>${weapon.area}</td>
    </tr>`)
  $('table#weapons').append(newWeapon)
}

function addAttribute(attribute, id) {



  const newAttribute = $(`<div class="attribute" id="attribute_${id}">
    <a id="click_${id}" onclick="rollAtribute('${attribute.type}', ${attribute.amount} )">
      <img class="attributeDice" src="./img/dado.png" alt="Dado">
    </a>
    <h3>${attribute.type}</h3>
    <input type="text" name="appearance" value="${attribute.amount}"  id="attribute_input_${id}" >
  </div>`)



  $('#attributesList').append(newAttribute)

}





function addpericia(pericia, id) {



  const newpericia = $(`<div class="pericia" id="pericia_${id}">
    <a id="click_${id}" onclick="rollAtribute('${pericia.type}', ${pericia.amount} )">
      <img class="attributeDice" src="./img/dado.png" alt="Dado">
    </a>
    <h3>${pericia.type}</h3>
    <input type="text" name="appearance" value="${pericia.amount}"  id="pericia_input_${id}" >
  </div>`)



  $('#periciasList').append(newpericia)

}




function deleteWeapon(id) {
  $(`tr#${id}`).remove()
}




 



function sanidadetest(){

  console.log(this)



  diceModal.css('display', 'block')






  
  
    setTimeout(() => {
      $('.modalDice').css('transform', 'rotate(360deg)')
      $('.modalDice').css('-webkit-transform', 'rotate(360deg)')
    }, 1000)
  
    setTimeout(() => {
      $('.sanityDice').css('transform', 'rotate(360deg)')
      $('.sanityDice').css('-webkit-transform', 'rotate(360deg)')
    }, 1000)
  
    
  
    setTimeout(() => {
      const expo = document.getElementById("damage3").value
      const diceNumber = rollDice('1d100')

      if (diceNumber > expo){
        $('#diceNumber').text(diceNumber)
        $('#diceType').text("Fracasso")
      
      }
       if  (diceNumber <= expo){
        $('#diceNumber').text(diceNumber)
        $('#diceType').text("Sucesso")
      }
    
      
  
      setTimeout(() => {
        diceModal.css('display', 'none')
        $('#diceNumber').text('')
        $('#diceType').text('')
  
        $('.modalDice').css('transform', 'rotate(0deg)')
        $('.modalDice').css('-webkit-transform', 'rotate(0deg)')
      }, 20000)
    }, 2000)
  }
  



