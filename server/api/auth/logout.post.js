import { removeRefreshToken } from "~~/server/db/refreshTokens"
import { setRefreshToken } from "~~/server/utils/jwt"

export default defineEventHandler(async (event) => {
    try {
        const cookies = useCookies(event)
        const refreshToken = cookies.refresh_token
        await removeRefreshToken(refreshToken)
    } catch (error) { }

    setRefreshToken(event, null)

    return { message: 'Done' }
})