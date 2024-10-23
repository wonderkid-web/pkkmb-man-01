import OverviewCard from '@/components/OverviewCard'
import { getServerSession } from 'next-auth'
import { options } from '../api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'

async function page() {
  const session = await getServerSession(options)

  if(!session?.user) redirect('/signin')
  return (
    <div className='min-h-full'>
      <OverviewCard />
    </div>
  )
}

export default page