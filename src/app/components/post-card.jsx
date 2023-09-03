'use client'

import Link from 'next/link'
import { Card, CardHeader, CardBody, CardFooter, Avatar } from '@nextui-org/react'
import { IconMessageCircle2, IconHeart, IconRepeat } from '@tabler/icons-react'

export default function PostCard ({
  userName,
  avatarUrl,
  content
}) {
  return (
    <Card className="shadow-none bg-transparent hover:bg-slate-800 transition border-b border-white/20 rounded-none cursor-pointer">
      <CardHeader className="justify-between">
        <div className="flex gap-2">
          <Link href={`/${userName}`}>
            <Avatar radius="full" size="md" src={avatarUrl} />
          </Link>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{userName}</h4>
            <h5 className="text-small tracking-tight text-default-400">@{userName}</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-xs text-white">
        <p>
          {content}
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <button>
          <IconMessageCircle2 className='w-4 h-4'/>
        </button>
        <button>
          <IconHeart className='w-4 h-4'/>
        </button>
        <button>
          <IconRepeat className='w-4 h-4'/>
        </button>
      </CardFooter>
    </Card>
  )
}
