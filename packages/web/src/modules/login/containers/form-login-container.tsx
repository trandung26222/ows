import { useLoginContext } from "core-modules"
import { observer } from "mobx-react"

export const FormLoginContainer = observer(() => {
    let { onLogin, data } = useLoginContext()
    return <div>
        <span>{data?.username}</span>
        <input value={data?.username} onChange={(e) => data!.username = e.target.value} />
        <button onClick={onLogin}
        >Login</button>
    </div>
})