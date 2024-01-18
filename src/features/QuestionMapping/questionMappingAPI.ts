import Question from "../model/Question"

export function fetchAll(study: string) {
  return new Promise<{ data: Question[] }>((resolve) =>
    setTimeout(() => {
      fetch("/data-api/rest/InsightsStudy").then(async (result: any) => {
        const quests = await result.json()
        console.table(quests.value)
        resolve({
          data: quests.value.map(
            // eslint-disable-next-line array-callback-return
            (value: { pkiStudyID: number; sStudyName: string }) => {
              return { QID: value.pkiStudyID, QuestionID: value.sStudyName }
            },
          ),
        })
      })
    }, 500),
  )
}
