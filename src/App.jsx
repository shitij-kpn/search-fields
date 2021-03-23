import { useEffect, useState } from 'react';
import './App.css';

import InputField from './components/InputField';
import Course from './components/Course'


function App() {
  const [data,setData] = useState();
  const [inputField,setInputField] = useState('');
  useEffect(() => {
    
    setTimeout(() => {
      const jsondata = {
        "status": "success",
        "data": {
          "course_id": "15e18729-1a4e-48f9-9370-6b961eec1e11",
          "course_name": "Tehsildar Exam ",
          "course_desc": "Learn graphic design today with Photoshop, Illustrator, Adobe XD, InDesign & more in this Adobe CC Masterclass! ",
          "course_thumb_img": "some image link",
          "course_img": "some image link",
          "course_join_img": "some image link",
          "course_ratings": "4.5(4.5(1,348 ratings))",
          "course_duration": "11 Weeks",
          "enrolled_students": "49",
          "course_sale_price": "5000",
          "course_base_price": "3000",
          "course_video_url": "some video link",
          "course_state": "Punjab",
          "category_type": "punjab",
          "course_code": "e331a7",
          "topics": [
            {
              "topic_id": "3a72f47a-4eb7-456f-93d5-30387daa21e0",
              "topic_name": "this is topic 1",
              "duration": "30hr",
              "sub_topics": [
                {
                  "module_id": "319a5c64-3c45-48c1-8892-20de6dfc38cc",
                  "module_name": "Sub topic 1",
                  "chapters": [
                    {
                      "chapter_id": "47038432-1171-4fbc-ae94-b71919dede8a",
                      "chapter_name": "chapter 1 photoshop"
                    },
                    {
                      "chapter_id": "4e5a54a8-3f47-413a-8004-5f199ae9de87",
                      "chapter_name": "chapter 2 lightroom"
                    }
                  ]
                },
                {
                  "module_id": "3f412cc9-328f-4842-b09f-32d0a52b9176",
                  "module_name": "Sub topic 2",
                  "chapters": [
                    {
                      "chapter_id": "612a3c30-a34f-4fbe-b79d-c5e67de70bdc",
                      "chapter_name": "chapter 1"
                    },
                    {
                      "chapter_id": "6817fddf-3d16-4605-b4ac-86288eaa46d0",
                      "chapter_name": "chapter 2"
                    }
                  ]
                }
              ]
            },
            {
              "topic_id": "7be830c3-a37f-4d37-a89c-b4ba7944e792",
              "topic_name": "this is topic 2",
              "duration": "30hr",
              "sub_topics": [
                {
                  "module_id": "42d4d8e1-0160-4fa2-860e-4eaf9b3d3803",
                  "module_name": "Sub topic 1",
                  "chapters": [
                    {
                      "chapter_id": "7527cbcd-1995-4a73-9e8d-462fa2f27828",
                      "chapter_name": "chapter 1"
                    },
                    {
                      "chapter_id": "8019713c-a1d3-4610-ba02-0d8158040e05",
                      "chapter_name": "chapter 2"
                    }
                  ]
                },
                {
                  "module_id": "45bebf56-676f-4b4d-9959-e235b78e0884",
                  "module_name": "Sub topic 2",
                  "chapters": [
                    {
                      "chapter_id": "84f13867-26be-4a8e-8280-81b70406449b",
                      "chapter_name": "chapter 1"
                    },
                    {
                      "chapter_id": "88024e1c-45e8-469b-ab21-afe184993c16",
                      "chapter_name": "chapter 2"
                    }
                  ]
                }
              ]
            },
            {
              "topic_id": "8e9de8fc-37dc-43a8-a682-b8b724fda377",
              "topic_name": "this is topic 3",
              "duration": "30hr",
              "sub_topics": [
                {
                  "module_id": "5d38af23-c733-42eb-a11d-4b8c06cf4c7f",
                  "module_name": "Sub topic 1",
                  "chapters": [
                    {
                      "chapter_id": "888deb2e-3f7e-46e3-964a-799aa2ef3545",
                      "chapter_name": "chapter 1"
                    },
                    {
                      "chapter_id": "88c604dd-4be4-49ec-bc3c-4430b524f8ae",
                      "chapter_name": "chapter 2"
                    }
                  ]
                },
                {
                  "module_id": "64c134db-cab8-49a9-a559-076f4267569f",
                  "module_name": "Sub topic 2",
                  "chapters": [
                    {
                      "chapter_id": "8a929d0d-b058-405a-a721-a45a9279aabf",
                      "chapter_name": "chapter 1"
                    },
                    {
                      "chapter_id": "90965d71-b4d4-494b-afd9-7e958d423829",
                      "chapter_name": "chapter 2"
                    }
                  ]
                }
              ]
            }
          ],
          "course_quizes": [
            {
              "course_quiz_id": "5c29e169-7df0-4388-aa75-003d170c70f4",
              "course_id": "15e18729-1a4e-48f9-9370-6b961eec1e11",
              "heading": "Practice Quiz",
              "total_quizes": "2",
              "duration": "40 min",
              "quizes": [
                {
                  "quiz_id": "4763619f-85fd-47f9-b04b-064ee9800fa0",
                  "course_quiz_id": "5c29e169-7df0-4388-aa75-003d170c70f4",
                  "quiz_name": "Mock 1",
                  "total_questions": "4",
                  "total_marks": "4",
                  "total_time": "4"
                },
                {
                  "quiz_id": "606d5b94-83c2-43f1-8cdc-f315c64e4545",
                  "course_quiz_id": "5c29e169-7df0-4388-aa75-003d170c70f4",
                  "quiz_name": "Mock 2",
                  "total_questions": "4",
                  "total_marks": "4",
                  "total_time": "4"
                }
              ]
            }
          ],
        }
      }
      const rawData = JSON.parse(JSON.stringify(jsondata));
      setData(rawData.data)
    },2500)
  },[])

  return (
    <div>
      <InputField inputField={inputField} setInputField={setInputField}/>
      {data ? <Course data={data} filterString={inputField}/> : <h1>Fetching Data....</h1>}
    </div>
  );
}

export default App;
