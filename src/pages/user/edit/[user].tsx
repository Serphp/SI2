import { getSession, useSession } from 'next-auth/react';
import { type GetServerSideProps } from 'next';
import Router, { useRouter } from 'next/router';
import { api } from '~/utils/api';
import Layout from '~/pages/components/Layout';
import { JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactFragment, ReactNode, ReactPortal, useState } from 'react';
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

type Props = {
  getProfile: any;
};

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
  

const UserProfilePage: React.FC<Props> = (props) => {

    //const id = useRouter().query.id
    //const getProfile = api.user.getProfile.useQuery(id);
    //console.log("drafts", props)
    const updateProfile = api.user.updateProfile.useMutation();
    const editProfile = api.user.createProfile.useMutation();
    const profile = props.getProfile;
    //console.log("profile", profile)
    const { data: session, status: loading } = useSession();

    const [name, setName] = useState("")
    const [lastname, setLastName] = useState("")
    const [age, setAge] = useState(Number("18"));
    const [bio, setBio] = useState('')
    const [location, setLocation] = useState('')
    //const [avatar, setAvatar] = useState("")
    //const [date, setDate] = useState(new Date());

    // let editp = (
    //   <div>
    //     <h1> hola </h1>
    //   </div>
    // )

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

        <Layout>
          {
              profile.map((profile : Profile) => (
                <div key={profile.id}>

              <form
                onSubmit={async (e) => {
                  e.preventDefault()
                  if (name === "") {
                      await editProfile.mutateAsync({
                        email: session?.user?.email ?? "Author's Email",
                        name,
                        lastname,
                        age,
                        bio,
                        location,
                  })
                } else {
                  await updateProfile.mutateAsync({
                    id: profile.id,
                    name,
                    lastname,
                    age,
                    bio,
                    location,
                  })
              Router.push("/")
            }}
          }
          >
            <h1>Edit Profile</h1>
            <input
                autoFocus
                onChange={(e) => setName(e.target.value)}
                placeholder={profile.name}
                type="text"
                value={name}
            />
            <input
                autoFocus
                onChange={(e) => setLastName(e.target.value)}
                placeholder={profile.lastname}
                type="text"
                value={lastname}
            />
            <input
                autoFocus
                onChange={(e) => setAge(Number(e.target.value))}
                placeholder={profile.age.toString()}
                type="number"
                value={profile.age.toString() || `${age}`}
            />
            <input
                autoFocus
                onChange={(e) => setLocation(e.target.value)}
                placeholder={profile.location}
                type="text"
                value={location}
            />
            <input
                autoFocus
                onChange={(e) => setBio(e.target.value)}
                placeholder={profile.bio}
                type="text"
                value={bio}
            />
            {/* <input
              autoFocus
              onChange={(e) => setDate(new Date(e.target.value))}
              placeholder="Date"
              type="date"
              value={`${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`}
            /> */}
            {/* <input
                autoFocus
                onChange={(e) => setAvatar(e.target.value)}
                placeholder="Avatar"
                type="text"
                value={avatar}
            /> */}
            <input
                disabled={!name || !lastname || !location || !bio || !age || editProfile.isLoading}
                type="submit"
                value="Edit"
            />
            <a className="back" href="#" onClick={() => Router.push("/")}>
                or Cancel
            </a>

            </form>
              </div>
            ))
          }
      
        </Layout>
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