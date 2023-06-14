import { useSession } from 'next-auth/react';
import Router, { useRouter } from 'next/router';
import { api } from '~/utils/api';
import Layout from '~/pages/components/Layout';
import { use, useState } from 'react';
import { number } from 'zod';



function UserProfilePage() {
    const router = useRouter();
    const id = useRouter().query.id

    const editProfile = api.user.editProfile.useMutation();

    const { data: session, status: loading } = useSession();

    const [name, setName] = useState("")
    const [lastname, setLastName] = useState("")
    const [age, setAge] = useState(18)
    const [bio, setBio] = useState('I am a new user')
    const [location, setLocation] = useState('Eart')
    const [avatar, setAvatar] = useState("")
    //const [date, setDate] = useState(Number(Date.now()))


    console.log(id)

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
        <Layout>
        <form
          onSubmit={async (e) => {
            e.preventDefault()
            await editProfile.mutateAsync({
                id: Number(id),
                email: session?.user?.email ?? "Author's Email",
                name,
                lastname,
                age,
                bio,
                location,
                avatar,
                //date
            })
            //console.log("editProfile", editProfile)
            Router.push("/")
          }}
        >
            <h1>Edit Profile</h1>
            <input
                autoFocus
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                type="text"
                value={name}
            />
            <input
                autoFocus
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                type="text"
                value={lastname}
            />
            <input
                autoFocus
                onChange={(e) => setAge(e.target.value)}
                placeholder="Age"
                type="number"
                value={age}
            />
            <input
                autoFocus
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
                type="text"
                value={location}
            />
            <input
                autoFocus
                onChange={(e) => setBio(e.target.value)}
                placeholder="Bio"
                type="text"
                value={bio}
            />
            {/* <input
                autoFocus
                onChange={(e) => setDate(e.target.value)}
                placeholder="Date"
                type="date"
                value={date}
            /> */}
            <input
                autoFocus
                onChange={(e) => setAvatar(e.target.value)}
                placeholder="Avatar"
                type="text"
                value={avatar}
            />
            <input
                disabled={!name || !lastname || !location || !bio || !date || !avatar}
                type="submit"
                value="Edit"
            />
            <a className="back" href="#" onClick={() => Router.push("/")}>
                or Cancel
            </a>

            </form>

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