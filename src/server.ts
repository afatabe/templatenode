import { z } from 'zod'

const userSchema = z.object({
  name: z.string().
    min(3, { message: "O nome precisa de no minimo 3 caracteres"}).
    max(30,{ message: "O nome pode ter no maximo 30 caracteres"}).
    transform(name => name.toLocaleUpperCase()),
  age: z.number().
    min(18, {message: "Você precisa ter no minimo 18 anos."})
})

type User = z.infer<typeof userSchema>

function SaveUserToDatabase(user: User) {
  const { name, age} = userSchema.parse(user)

  console.log(name, age);
  
}

SaveUserToDatabase({
  name: "Anderson Fabiano Antonio",
  age: 42
})