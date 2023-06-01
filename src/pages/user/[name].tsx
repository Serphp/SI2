import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { type GetServerSideProps } from 'next';
//import { prisma } from '~/utils/prisma';


const UserProfilePage = () => {

  const router = useRouter();
  const { data: session, status: loading } = useSession();

  if (!loading && !session) {
    return <div>Acceso denegado. Por favor, inicia sesión.</div>;
  }

  const { name } = router.query;

  return (
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


    </div>
  );
};


export default UserProfilePage;