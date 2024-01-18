import { useEffect } from "react"
import { useAppSelector, useAppDispatch } from "../../app/hooks"

import { questionMappings, fetchAllQuestions } from "./questionMappingSlice"
import { Button } from "@mui/material"
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid"

export function QuestionMapping() {
  const questions = useAppSelector(questionMappings)
  const dispatch = useAppDispatch()

  var rows: GridRowsProp = [
    {
      QID: 1,
      StudyID: "24",
      QuestionID: "S2Q01_comm",
      SASQuestionID: "2-0020-01-003",
      QuestionDesc: "S2Q01_comm Desc",
      QuestionGroup: "",
      FieldsCde: "1",
      OptionsCde: null,
      SubCde: null,
      RespondentAttr: null,
    },
    {
      QID: 2,
      StudyID: "24",
      QuestionID: "S2Q01_comm",
      SASQuestionID: "2-0020-01-003",
      QuestionDesc: "S2Q01_comm Desc",
      QuestionGroup: "",
      FieldsCde: "2",
      OptionsCde: null,
      SubCde: null,
      RespondentAttr: null,
    },
    {
      QID: 3,
      StudyID: "24",
      QuestionID: "S2Q01_comm",
      SASQuestionID: "2-0020-01-003",
      QuestionDesc: "S2Q01_comm Desc",
      QuestionGroup: "",
      FieldsCde: "3",
      OptionsCde: null,
      SubCde: null,
      RespondentAttr: null,
    },
  ]

  const columns: GridColDef[] = [
    { field: "QID", headerName: "pkiQID", width: 150 },
    { field: "StudyID", headerName: "fkiStudyID", width: 150 },
    {
      field: "QuestionID",
      headerName: "sQuestionID",
      width: 150,
      editable: true,
    },
    {
      field: "SASQuestionID",
      headerName: "sSASQuestionID",
      width: 150,
      editable: true,
    },
    {
      field: "QuestionDesc",
      headerName: "sQuestionDesc",
      width: 150,
      editable: true,
    },
    {
      field: "QuestionGroup",
      headerName: "sQuestionGroup",
      width: 150,
      editable: true,
    },
    {
      field: "FieldsCde",
      headerName: "sFieldsCde",
      width: 150,
      editable: true,
    },
    {
      field: "OptionsCde",
      headerName: "sOptionsCde",
      width: 150,
      editable: true,
    },
    { field: "SubCde", headerName: "sSubCde", width: 150, editable: true },
    {
      field: "RespondentAttr",
      headerName: "sRespondentAttr",
      width: 150,
      editable: true,
    },
  ]

  useEffect(() => {
    console.log("fetching")
    console.log(questions)
    dispatch(fetchAllQuestions("testing"))
  }, [])

  return (
    <div>
      {questions.Study} {questions.Questions.length}
      <Button variant="contained">Contained</Button>
      <div style={{ height: 300, width: "100%" }}>
        <DataGrid
          editMode="row"
          rows={questions.Questions}
          columns={columns}
          getRowId={(row) => row.QID}
        />
      </div>
    </div>
  )
}
