'use server'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'

export const addPost = async (formData) => {
  const content = formData.get('content')

  if (content === null) return

  const supabase = createServerActionClient({ cookies })
  // Revisar si el usuario está autenticado
  const { data: { user } } = await supabase.auth.getUser()
  if (user === null) return
  await supabase.from('posts').insert({ content, user_id: user.id })
  revalidatePath('/')
}
