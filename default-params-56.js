const greeter = (name = 'User', age) => {
  console.log('Hola ' + name)
}

greeter('Hans')
greeter() //uses default name
