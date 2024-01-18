import Question from "../model/Question"

export function fetchAll(study: string) {
  return new Promise<{ data: Question[] }>((resolve) =>
    setTimeout(() => {
      fetch("/.auth/me").then(async (result: any): Promise<void> => {
        const quests = await result.json()
        console.log(quests)
      })

      fetch(
        "/data-api/rest/InfoQuestion?$select=pkiQID,sQuestionID&$filter=fkiStudyID eq 24",
        {
          method: "GET",
          headers: {
            "X-MS-API-ROLE": "admin",
          },
        },
      ).then(async (result: any): Promise<void> => {
        const quests = await result.json()
        console.table(quests.value)
        resolve({
          data: quests.value.map(
            // eslint-disable-next-line array-callback-return
            (value: { pkiQID: number; sQuestionID: string }) => {
              return { QID: value.pkiQID, QuestionID: value.sQuestionID }
            },
          ),
        })
      })
    }, 500),
  )
}
