import { base_url } from "@/api/index"
import { getCookie } from "@/hooks/useCookie"
import type { IGame } from "@/dto/GameDto"

export const fetchGames = async (type: string = "fun", limit: string = "10"): Promise<IGame[]> => {
  const token: string | undefined = getCookie("token")

  let response: Response

  if (token) {
    response = await fetch(`${base_url}/client/games?type=${type}&limit=${limit}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  } else {
    response = await fetch(`${base_url}/client/games?type=${type}&limit=${limit}`)
  }

  return await response.json()
}
