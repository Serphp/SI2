import { useSession, getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { api } from '~/utils/api';
import { type GetServerSideProps } from 'next';
import { prisma } from '~/server/db';



function UserProfilePage() {

  const id = useRouter().query.id

  const editProfile = api.user.editProfile.useMutation()

  const router = useRouter();
  const { data: session, status: loading } = useSession();

  const { name } = router.query;


  return (


    <div>
      
      {
        loading === 'loading' && (
          <div>
            Loading...
          </div>
        )
      }

      {
        session ? (
          <div>
      <h1>Perfil de usuario</h1>
      <p>Nombre: {name}</p>
      {session?.user?.image && (
        <img src={session?.user?.image} alt="profile" />
      )}
      <p>Nombre: {session?.user?.id}</p>
      <p>Nombre: {session?.user?.name}</p>
      <p>Nombre: {session?.user?.email}</p>
      <p>Nombre: {session?.user?.image}</p>

      <h1>Profile Page</h1>

      <p>Name: {name}</p>
      {/* <p>Email: {email}</p> */}

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