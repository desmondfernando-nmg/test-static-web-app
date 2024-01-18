import Question from "../model/Question"

export function fetchAll(study: string) {
  return new Promise<{ data: Question[] }>((resolve) =>
    setTimeout(() => {
      fetch(
        "/data-api/rest/InfoQuestion?$select=pkiQID,sQuestionID&$filter=fkiStudyID eq 24",
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
