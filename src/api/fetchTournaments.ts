import { base_url } from "@/api/index"
import { getCookie } from "@/hooks/useCookie"
import type { ITournament } from "@/dto/TournamentDto"

export const fetchTournaments = async (): Promise<ITournament[]> => {
  const token: string | undefined = getCookie("token")

  let response: Response

  if (token) {
    response = await fetch(`${base_url}/client/tournaments`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  } else {
    response = await fetch(`${base_url}/client/tournaments`)
  }

  return await response.json()
}