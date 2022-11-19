import { useSession, signIn, signOut } from "next-auth/react"
import * as PropTypes from "prop-types";

function UserInformation({data}) {
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

UserInformation.propTypes = {data: PropTypes.shape({name: PropTypes.any, email: PropTypes.any, image: PropTypes.any})};

export default function LoginBtn() {
    const { data: session } = useSession()
    if (session) {
        return (
            <>
                Signed in as {session.user.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <>
            Not signed in <br />
            {/*<UserInformation data={session.user} />*/}
            <button onClick={() => signIn()}>Sign in</button>
        </>
    )
}