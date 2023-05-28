import { SecretsManagerClient, GetSecretValueCommand } from "@aws-sdk/client-secrets-manager"
import { useEffect } from "react"

export function Calendar() {
    useEffect(() => {
        const googleClientId = process.env;
        const googleClientSecret = process.env.google_calendar_client_secret;
        console.log(googleClientId, googleClientSecret)

    }, [])

  return <></>
}
