import { useSession, getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
// import { api } from '~/utils/api';
import { useState, useEffect } from 'react';
import { type GetServerSideProps } from 'next';
import { prisma } from '~/server/db';



export const getServerSideProps: GetServerSideProps = async ({req, res}) => {

  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return { props: { getProfile: [] } };
  }
  const getProfile = await prisma.profile.findMany({
    where: {
      userId: Number(session?.user?.id),
    },
  });
  return {
    props: { getProfile },
  };
}

type Profile = {
  id: number;
  name: string;
  lastname: string;
  age: number;
  bio: string;
  location: string;
  //avatar: string;
  //date: Date;
};

type Props = {
  getProfile: any;
};

const UserProfilePage: React.FC<Props> = (props) => {
  
  // const router = useRouter();
  // const { id } = router.query;
  // const [selectedProfileId, setSelectedProfileId] = useState(null);
  const { data: session, status: loading } = useSession();
  const profile = props.getProfile;




  return (
    <div>
      
      {loading === 'loading' && (<div>Loading...</div>)}

      {
        session ? (
          <div className='tm-bgcolor-2 tm-border-rounded'>
            {
              profile.map((profile: Profile) => (
                <div key={profile.id} className='content'>

                  <div className='profile'>
                    <img src={session?.user?.image || undefined} className='img-thumbnail' alt="avatar" />
                      <span>
                        <h2>Nombre: {profile.name}</h2>
                        <p className='subtext'>Apellido: {profile.lastname}</p>
                      </span>
                  </div>
                  
                  <p className='subtext'>Edad: {profile.age}</p>
                  <p className='subtext'>biografía: {profile.bio}</p>
                  <p className='subtext'>País: {profile.location}</p>

                </div>
              ))
            }
          </div>
        ) : (
          <div>
            Not authenticated
          </div>
        )
      }
    </div>
  );
};

export default UserProfilePage;