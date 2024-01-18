export default interface Question {
  QID: number
  QuestionID: string
  SASQuestionID: string
  StudyID?: number
  QuestionDesc?: string
  QuestionGroup?: string
  SASQuestionIDF2F?: string
  FieldsCde?: string
  OptionsCde?: string
  SubCde?: string
  RespondentAttr?: string
}
//pkiQID, fkiStudyID,	sSASQuestionID,	sQuestionDesc,	sQuestionGroup,
//sSASQuestionID_f2f,	sQuestionID,	sFieldsCde,	sOptionsCde,	sSubCde,
//sRespondentAttr
