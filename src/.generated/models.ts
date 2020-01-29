/**
 *
 * NOTE: This class is auto generated by the code generator.
 * Do not edit the class manually.
 */

/*
 * @namespace forms
 */
export interface SigninForm {
  /**
   *
   *
   * @serverType string
   */
  username: string;
  /**
   *
   *
   * @serverType string
   */
  password: string;
}
/*
 * @namespace models
 */
export interface TokenObj {
  /**
   *
   *
   * @serverType string
   */
  token: string;
  /**
   *  int64
   *
   * @serverType integer
   */
  expires: number;
}
/*
 * @namespace models
 */
export interface RestfulData {
  /**
   *  int32
   *
   * @serverType integer
   */
  code: number;
  /**
   *
   *
   * @serverType string
   */
  message: string;
}
/*
 * @namespace models
 */
export interface UserInfo {
  /**
   *
   *
   * @serverType array
   */
  roles: string[];
  /**
   *
   *
   * @serverType string
   */
  name: string;
}
/*
 * @namespace models
 */
export interface Awards {
  /**
   *  int32
   *
   * @serverType integer
   */
  id: number;
  /**
   *
   *
   * @serverType string
   */
  studentId: string;
  /**
   *
   *
   * @serverType string
   */
  studentName: string;
  /**
   *
   *
   * @serverType string
   */
  college: string;
  /**
   *  int32
   *
   * @serverType integer
   */
  year: number;
  /**
   *
   *
   * @serverType string
   */
  mayor: string;
  /**
   *
   *
   * @serverType string
   */
  projectName: string;
  /**
   *
   *
   * @serverType string
   */
  projectType: string;
  /**
   *
   *
   * @serverType string
   */
  projectClass: string;
  /**
   *
   *
   * @serverType string
   */
  rank: string;
  /**
   *  int32
   *
   * @serverType integer
   */
  paiming: number;
  /**
   *
   *
   * @serverType string
   */
  partner: string;
  /**
   *
   *
   * @serverType string
   */
  teacher: string;
  /**
   *
   *
   * @serverType string
   */
  teacherCollege: string;
  /**
   *
   *
   * @serverType string
   */
  organizer: string;
  /**
   *
   *
   * @serverType string
   */
  mark: string;
  /**
   *
   *
   * @serverType string
   */
  status: string;
  /**
   *
   *
   * @serverType string
   */
  fileId: string;
  /**
   *
   *
   * @serverType string
   */
  school: string;
  /**
   *
   *
   * @serverType string
   */
  awardTime: string;
  /**
   *
   *
   * @serverType string
   */
  handleTime: string;
  /**
   *
   *
   * @serverType string
   */
  handler: string;
}
/*
 * @namespace models
 */
export interface Bed {
  /**
   *  int32
   *
   * @serverType integer
   */
  id: number;
  /**
   *  int32
   *
   * @serverType integer
   */
  campus: number;
  /**
   *
   *
   * @serverType string
   */
  area: string;
  /**
   *
   *
   * @serverType string
   */
  building: string;
  /**
   *
   *
   * @serverType string
   */
  room: string;
  /**
   *
   *
   * @serverType string
   */
  type: string;
  /**
   *
   *
   * @serverType string
   */
  name: string;
  /**
   *  int32
   *
   * @serverType integer
   */
  cost: number;
  /**
   *  int32
   *
   * @serverType integer
   */
  gender: number;
  /**
   *  int32
   *
   * @serverType integer
   */
  year: number;
  /**
   *  int32
   *
   * @serverType integer
   */
  status: number;
}
/*
 * @namespace models
 */
export interface Campus {
  /**
   *  int32
   *
   * @serverType integer
   */
  id: number;
  /**
   *
   *
   * @serverType string
   */
  name: string;
  /**
   *
   *
   * @serverType string
   */
  address: string;
}
/*
 * @namespace models
 */
export interface CETRate {
  /**
   *
   *
   * @serverType string
   */
  name: string;
  /**
   *  int32
   *
   * @serverType integer
   */
  grade: number;
  /**
   *  int32
   *
   * @serverType integer
   */
  type: number;
  /**
   *  int32
   *
   * @serverType integer
   */
  total: number;
  /**
   *  int32
   *
   * @serverType integer
   */
  pass: number;
  /**
   *  double
   *
   * @serverType number
   */
  rate: number;
  /**
   *
   *
   * @serverType array
   */
  scoreCount: HighScoreCount[];
}
/*
 * @namespace models
 */
export interface HighScoreCount {
  /**
   *  int32
   *
   * @serverType integer
   */
  score: number;
  /**
   *  int32
   *
   * @serverType integer
   */
  count: number;
}
/*
 * @namespace models
 */
export interface StuCET {
  /**
   *
   *
   * @serverType string
   */
  stid: string;
  /**
   *
   *
   * @serverType string
   */
  name: string;
  /**
   *
   *
   * @serverType string
   */
  major: string;
  /**
   *
   *
   * @serverType string
   */
  bj: string;
  /**
   *  int32
   *
   * @serverType integer
   */
  grade: number;
  /**
   *  int32
   *
   * @serverType integer
   */
  type: number;
  /**
   *  double
   *
   * @serverType number
   */
  score: number;
}
/*
 * @namespace models
 */
export interface CET {
  /**
   *  int64
   *
   * @serverType integer
   */
  id: number;
  /**
   *
   *
   * @serverType string
   */
  stid: string;
  /**
   *
   *
   * @serverType string
   */
  name: string;
  /**
   *
   *
   * @serverType string
   */
  term: string;
  /**
   *  int32
   *
   * @serverType integer
   */
  year: number;
  /**
   *  int32
   *
   * @serverType integer
   */
  type: number;
  /**
   *
   *
   * @serverType string
   */
  idCardNo: string;
  /**
   *
   *
   * @serverType string
   */
  reportNo: string;
  /**
   *
   *
   * @serverType string
   */
  school: string;
  /**
   *  double
   *
   * @serverType number
   */
  score: number;
  /**
   *  double
   *
   * @serverType number
   */
  listen: number;
  /**
   *  double
   *
   * @serverType number
   */
  reading: number;
  /**
   *  double
   *
   * @serverType number
   */
  writing: number;
  /**
   *  double
   *
   * @serverType number
   */
  others: number;
}
/*
 * @namespace models
 */
export interface CETAverage {
  /**
   *
   *
   * @serverType string
   */
  isPass: string;
  /**
   *  int32
   *
   * @serverType integer
   */
  stuCount: number;
  /**
   *
   *
   * @serverType string
   */
  term: string;
  /**
   *  int32
   *
   * @serverType integer
   */
  type: number;
  /**
   *
   *
   * @serverType string
   */
  name: string;
  /**
   *  double
   *
   * @serverType number
   */
  score: number;
  /**
   *  double
   *
   * @serverType number
   */
  listen: number;
  /**
   *  double
   *
   * @serverType number
   */
  reading: number;
  /**
   *  double
   *
   * @serverType number
   */
  writing: number;
  /**
   *  double
   *
   * @serverType number
   */
  others: number;
}
/*
 * @namespace models
 */
export interface College {
  /**
   *  int32
   *
   * @serverType integer
   */
  id: number;
  /**
   *
   *
   * @serverType string
   */
  name: string;
  /**
   *
   *
   * @serverType string
   */
  code: string;
  /**
   *  int32
   *
   * @serverType integer
   */
  campus: number;
  /**
   *
   *
   * @serverType string
   */
  type: string;
}
/*
 * @namespace models
 */
export interface Course {
  /**
   *  int32
   *
   * @serverType integer
   */
  id: number;
  /**
   *  int32
   *
   * @serverType integer
   */
  grade: number;
  /**
   *
   *
   * @serverType string
   */
  courseid: string;
  /**
   *
   *
   * @serverType string
   */
  courseno: string;
  /**
   *
   *
   * @serverType string
   */
  cname: string;
  /**
   *
   *
   * @serverType string
   */
  term: string;
  /**
   *
   *
   * @serverType string
   */
  teacherno: string;
  /**
   *
   *
   * @serverType string
   */
  teachername: string;
  /**
   *
   *
   * @serverType string
   */
  spno: string;
  /**
   *
   *
   * @serverType string
   */
  spname: string;
  /**
   *
   *
   * @serverType string
   */
  credithour: string;
  /**
   *
   *
   * @serverType string
   */
  examtype: string;
  /**
   *
   *
   * @serverType string
   */
  collegeno: string;
  /**
   *
   *
   * @serverType string
   */
  collegename: string;
  /**
   *
   *
   * @serverType string
   */
  courseType: string;
}
/*
 * @namespace models
 */
export interface Fee {
  /**
   *  int32
   *
   * @serverType integer
   */
  id: number;
  /**
   *
   *
   * @serverType string
   */
  studentType: string;
  /**
   *
   *
   * @serverType string
   */
  name: string;
  /**
   *  int32
   *
   * @serverType integer
   */
  amount: number;
}
/*
 * @namespace models
 */
export interface FailStatisc {
  /**
   *
   *
   * @serverType string
   */
  grade: string;
  /**
   *
   *
   * @serverType string
   */
  college: string;
  /**
   *
   *
   * @serverType string
   */
  major: string;
  /**
   *
   *
   * @serverType string
   */
  stid: string;
  /**
   *
   *
   * @serverType string
   */
  name: string;
  /**
   *  int32
   *
   * @serverType integer
   */
  failCourseCount: number;
  /**
   *  double
   *
   * @serverType number
   */
  failCredit: number;
  /**
   *
   *
   * @serverType array
   */
  failCourse: FailCourse[];
}
/*
 * @namespace models
 */
export interface FailCourse {
  /**
   *
   *
   * @serverType string
   */
  cname: string;
  /**
   *
   *
   * @serverType string
   */
  courseno: string;
  /**
   *  double
   *
   * @serverType number
   */
  credithour: number;
  /**
   *  double
   *
   * @serverType number
   */
  score: number;
}
/*
 * @namespace models
 */
export interface scoreStatic {
  /**
   *
   *
   * @serverType string
   */
  grade: string;
  /**
   *
   *
   * @serverType string
   */
  bj: string;
  /**
   *
   *
   * @serverType string
   */
  stid: string;
  /**
   *
   *
   * @serverType string
   */
  name: string;
  /**
   *  double
   *
   * @serverType number
   */
  average: number;
  /**
   *  double
   *
   * @serverType number
   */
  credit: number;
}
/*
 * @namespace models
 */
export interface GYscore {
  /**
   *  int64
   *
   * @serverType integer
   */
  id: number;
  /**
   *  int32
   *
   * @serverType integer
   */
  grade: number;
  /**
   *
   *
   * @serverType string
   */
  class: string;
  /**
   *
   *
   * @serverType string
   */
  stid: string;
  /**
   *
   *
   * @serverType string
   */
  name: string;
  /**
   *
   *
   * @serverType string
   */
  term: string;
  /**
   *
   *
   * @serverType string
   */
  termname: string;
  /**
   *
   *
   * @serverType string
   */
  courseid: string;
  /**
   *
   *
   * @serverType string
   */
  cname: string;
  /**
   *
   *
   * @serverType string
   */
  sPname: string;
  /**
   *
   *
   * @serverType string
   */
  courseno: string;
  /**
   *
   *
   * @serverType string
   */
  coursetype: string;
  /**
   *  double
   *
   * @serverType number
   */
  score: number;
  /**
   *
   *
   * @serverType string
   */
  cj: string;
  /**
   *
   *
   * @serverType string
   */
  scoretype: string;
  /**
   *  double
   *
   * @serverType number
   */
  credithour: number;
  /**
   *
   *
   * @serverType string
   */
  jys: string;
  /**
   *
   *
   * @serverType string
   */
  stype: string;
  /**
   *
   *
   * @serverType string
   */
  ttype: string;
  /**
   *
   *
   * @serverType string
   */
  testtime: string;
  /**
   *  int32
   *
   * @serverType integer
   */
  cidRank: number;
  /**
   *  int32
   *
   * @serverType integer
   */
  cnoRank: number;
}
/*
 * @namespace models
 */
export interface GreenChannel {
  /**
   *  int32
   *
   * @serverType integer
   */
  id: number;
  /**
   *  int32
   *
   * @serverType integer
   */
  studentId: number;
  /**
   *
   *
   * @serverType string
   */
  contractNo: string;
  /**
   *
   *
   * @serverType string
   */
  replyCode: string;
  /**
   *
   *
   * @serverType string
   */
  deptName: string;
  /**
   *
   *
   * @serverType string
   */
  contact: string;
  /**
   *
   *
   * @serverType string
   */
  deptAddress: string;
  /**
   *
   *
   * @serverType string
   */
  deptPhone: string;
  /**
   *  int32
   *
   * @serverType integer
   */
  amount: number;
  /**
   *
   *
   * @serverType string
   */
  description: string;
  /**
   *  int32
   *
   * @serverType integer
   */
  fileId: number;
  /**
   *  int32
   *
   * @serverType integer
   */
  status: number;
  /**
   *  int32
   *
   * @serverType integer
   */
  reviewer: number;
  /**
   *  int64
   *
   * @serverType integer
   */
  reviewTime: number;
  /**
   *
   *
   * @serverType string
   */
  opinion: string;
  /**
   *  int64
   *
   * @serverType integer
   */
  year: number;
}
/*
 * @namespace models
 */
export interface InfoCategory {
  /**
   *  int32
   *
   * @serverType integer
   */
  id: number;
  /**
   *
   *
   * @serverType string
   */
  name: string;
  /**
   *
   *
   * @serverType string
   */
  value: string;
  /**
   *
   *
   * @serverType string
   */
  type: string;
  /**
   *  int32
   *
   * @serverType integer
   */
  enable: number;
  /**
   *  int32
   *
   * @serverType integer
   */
  isDefault: number;
}
/*
 * @namespace models
 */
export interface Leave {
  /**
   *  int32
   *
   * @serverType integer
   */
  id: number;
  /**
   *
   *
   * @serverType string
   */
  studentId: string;
  /**
   *
   *
   * @serverType string
   */
  type: string;
  /**
   *  int64
   *
   * @serverType integer
   */
  arrivalTime: number;
  /**
   *  int32
   *
   * @serverType integer
   */
  leaveYear: number;
  /**
   *
   *
   * @serverType string
   */
  reason: string;
  /**
   *  int32
   *
   * @serverType integer
   */
  status: number;
  /**
   *  int32
   *
   * @serverType integer
   */
  handler: number;
  /**
   *  int64
   *
   * @serverType integer
   */
  handleTime: number;
  /**
   *  int64
   *
   * @serverType integer
   */
  year: number;
}
/*
 * @namespace models
 */
export interface Major {
  /**
   *  int32
   *
   * @serverType integer
   */
  id: number;
  /**
   *
   *
   * @serverType string
   */
  name: string;
  /**
   *
   *
   * @serverType string
   */
  code: string;
  /**
   *
   *
   * @serverType string
   */
  collegeCode: string;
  /**
   *
   *
   * @serverType string
   */
  engName: string;
  /**
   *
   *
   * @serverType string
   */
  sptype: string;
  /**
   *
   *
   * @serverType string
   */
  years: string;
  /**
   *
   *
   * @serverType string
   */
  degree: string;
  /**
   *
   *
   * @serverType string
   */
  type: string;
}
/*
 * @namespace models
 */
export interface News {
  /**
   *  int32
   *
   * @serverType integer
   */
  id: number;
  /**
   *
   *
   * @serverType string
   */
  title: string;
  /**
   *  int32
   *
   * @serverType integer
   */
  type: number;
  /**
   *
   *
   * @serverType string
   */
  content: string;
  /**
   *  int64
   *
   * @serverType integer
   */
  publishTime: number;
  /**
   *  int32
   *
   * @serverType integer
   */
  year: number;
}
/*
 * @namespace models
 */
export interface OperateLog {
  /**
   *  int32
   *
   * @serverType integer
   */
  id: number;
  /**
   *
   *
   * @serverType string
   */
  xh: string;
  /**
   *  int32
   *
   * @serverType integer
   */
  type: number;
  /**
   *
   *
   * @serverType string
   */
  time: string;
  /**
   *
   *
   * @serverType string
   */
  mark: string;
  /**
   *
   *
   * @serverType string
   */
  handler: string;
}
/*
 * @namespace models
 */
export interface Payment {
  /**
   *  int32
   *
   * @serverType integer
   */
  id: number;
  /**
   *
   *
   * @serverType string
   */
  studentId: string;
  /**
   *  int32
   *
   * @serverType integer
   */
  status: number;
  /**
   *  int32
   *
   * @serverType integer
   */
  amount: number;
  /**
   *  int64
   *
   * @serverType integer
   */
  time: number;
  /**
   *  int32
   *
   * @serverType integer
   */
  total: number;
  /**
   *  int32
   *
   * @serverType integer
   */
  waiver: number;
  /**
   *
   *
   * @serverType string
   */
  mark: string;
  /**
   *
   *
   * @serverType boolean
   */
  isGreenChannel: boolean;
}
/*
 * @namespace models
 */
export interface GDscore {
  /**
   *  int64
   *
   * @serverType integer
   */
  id: number;
  /**
   *  int32
   *
   * @serverType integer
   */
  grade: number;
  /**
   *
   *
   * @serverType string
   */
  class: string;
  /**
   *
   *
   * @serverType string
   */
  stid: string;
  /**
   *
   *
   * @serverType string
   */
  name: string;
  /**
   *
   *
   * @serverType string
   */
  term: string;
  /**
   *
   *
   * @serverType string
   */
  courseid: string;
  /**
   *
   *
   * @serverType string
   */
  cname: string;
  /**
   *
   *
   * @serverType string
   */
  courseno: string;
  /**
   *  double
   *
   * @serverType number
   */
  test: number;
  /**
   *  double
   *
   * @serverType number
   */
  score: number;
  /**
   *  double
   *
   * @serverType number
   */
  credithour: number;
  /**
   *
   *
   * @serverType string
   */
  stype: string;
  /**
   *
   *
   * @serverType string
   */
  ttype: string;
  /**
   *
   *
   * @serverType string
   */
  testtime: string;
  /**
   *  int32
   *
   * @serverType integer
   */
  spRank: number;
  /**
   *  int32
   *
   * @serverType integer
   */
  cnoRank: number;
  /**
   *
   *
   * @serverType string
   */
  coursetype: string;
}
/*
 * @namespace models
 */
export interface RetakeStatisc {
  /**
   *
   *
   * @serverType string
   */
  grade: string;
  /**
   *
   *
   * @serverType string
   */
  college: string;
  /**
   *
   *
   * @serverType string
   */
  major: string;
  /**
   *
   *
   * @serverType string
   */
  stid: string;
  /**
   *
   *
   * @serverType string
   */
  name: string;
  /**
   *  int32
   *
   * @serverType integer
   */
  passCount: number;
  /**
   *  double
   *
   * @serverType number
   */
  passCredit: number;
  /**
   *  int32
   *
   * @serverType integer
   */
  notPassCount: number;
  /**
   *  double
   *
   * @serverType number
   */
  notPassCredit: number;
  /**
   *  int32
   *
   * @serverType integer
   */
  noRetakeCount: number;
  /**
   *  double
   *
   * @serverType number
   */
  noRetakeCredit: number;
  /**
   *
   *
   * @serverType array
   */
  passCourse: FailCourse[];
  /**
   *
   *
   * @serverType array
   */
  notPassCourse: FailCourse[];
  /**
   *
   *
   * @serverType array
   */
  noRetakeCourse: FailCourse[];
}
/*
 * @namespace models
 */
export interface ScoreByCourse {
  /**
   *
   *
   * @serverType string
   */
  term: string;
  /**
   *
   *
   * @serverType string
   */
  termname: string;
  /**
   *
   *
   * @serverType string
   */
  courseid: string;
  /**
   *
   *
   * @serverType string
   */
  cname: string;
  /**
   *
   *
   * @serverType string
   */
  courseno: string;
  /**
   *  double
   *
   * @serverType number
   */
  credithour: number;
  /**
   *
   *
   * @serverType string
   */
  stype: string;
  /**
   *
   *
   * @serverType string
   */
  ttype: string;
  /**
   *
   *
   * @serverType string
   */
  testtime: string;
  /**
   *
   *
   * @serverType string
   */
  teacherno: string;
  /**
   *
   *
   * @serverType string
   */
  teachername: string;
  /**
   *
   *
   * @serverType string
   */
  collegeno: string;
  /**
   *
   *
   * @serverType string
   */
  collegename: string;
  /**
   *
   *
   * @serverType string
   */
  courseType: string;
  /**
   *
   *
   * @serverType array
   */
  stuScore: StudentScore[];
}
/*
 * @namespace models
 */
export interface StudentScore {
  /**
   *
   *
   * @serverType string
   */
  stid: string;
  /**
   *
   *
   * @serverType string
   */
  name: string;
  /**
   *  double
   *
   * @serverType number
   */
  score: number;
}
/*
 * @namespace models
 */
export interface ScoreFail {
  /**
   *
   *
   * @serverType string
   */
  stid: string;
  /**
   *
   *
   * @serverType string
   */
  name: string;
  /**
   *  int32
   *
   * @serverType integer
   */
  grade: number;
  /**
   *
   *
   * @serverType string
   */
  college: string;
  /**
   *
   *
   * @serverType string
   */
  major: string;
  /**
   *  int32
   *
   * @serverType integer
   */
  failCount: number;
  /**
   *  double
   *
   * @serverType number
   */
  failCredit: number;
  /**
   *
   *
   * @serverType array
   */
  failCourse: FailCourse[];
}
/*
 * @namespace models
 */
export interface StuInfo {
  /**
   *  int32
   *
   * @serverType integer
   */
  id: number;
  /**
   *
   *
   * @serverType string
   */
  name: string;
  /**
   *
   *
   * @serverType string
   */
  gender: string;
  /**
   *
   *
   * @serverType string
   */
  studentId: string;
  /**
   *
   *
   * @serverType string
   */
  examineeNo: string;
  /**
   *
   *
   * @serverType string
   */
  idCardNo: string;
  /**
   *
   *
   * @serverType string
   */
  college: string;
  /**
   *
   *
   * @serverType string
   */
  major: string;
  /**
   *
   *
   * @serverType string
   */
  class: string;
  /**
   *  int32
   *
   * @serverType integer
   */
  year: number;
  /**
   *
   *
   * @serverType string
   */
  type: string;
  /**
   *
   *
   * @serverType string
   */
  nativePlace: string;
  /**
   *  int32
   *
   * @serverType integer
   */
  grade: number;
  /**
   *
   *
   * @serverType string
   */
  spno: string;
  /**
   *
   *
   * @serverType string
   */
  nation: string;
  /**
   *
   *
   * @serverType string
   */
  birthday: string;
  /**
   *
   *
   * @serverType string
   */
  enrolldate: string;
  /**
   *
   *
   * @serverType string
   */
  hostel: string;
  /**
   *
   *
   * @serverType string
   */
  hostelphone: string;
  /**
   *
   *
   * @serverType string
   */
  postcode: string;
  /**
   *
   *
   * @serverType string
   */
  address: string;
  /**
   *
   *
   * @serverType string
   */
  phoneno: string;
  /**
   *
   *
   * @serverType string
   */
  familyheader: string;
  /**
   *
   *
   * @serverType string
   */
  changetype: string;
  /**
   *
   *
   * @serverType string
   */
  counselor: string;
  /**
   *
   *
   * @serverType string
   */
  parentphone: string;
  /**
   *
   *
   * @serverType string
   */
  familyaddress: string;
  /**
   *
   *
   * @serverType string
   */
  qq: string;
  /**
   *
   *
   * @serverType string
   */
  email: string;
  /**
   *
   *
   * @serverType string
   */
  stustatus: string;
}
/*
 * @namespace models
 */
export interface Student {
  /**
   *  int32
   *
   * @serverType integer
   */
  id: number;
  /**
   *
   *
   * @serverType string
   */
  name: string;
  /**
   *
   *
   * @serverType string
   */
  gender: string;
  /**
   *
   *
   * @serverType string
   */
  birthDay: string;
  /**
   *
   *
   * @serverType string
   */
  studentId: string;
  /**
   *
   *
   * @serverType string
   */
  examineeNo: string;
  /**
   *
   *
   * @serverType string
   */
  idCardNo: string;
  /**
   *
   *
   * @serverType string
   */
  collegeCode: string;
  /**
   *
   *
   * @serverType string
   */
  majorCode: string;
  /**
   *
   *
   * @serverType string
   */
  class: string;
  /**
   *  int32
   *
   * @serverType integer
   */
  year: number;
  /**
   *
   *
   * @serverType string
   */
  type: string;
  /**
   *
   *
   * @serverType string
   */
  clothesSize: string;
  /**
   *
   *
   * @serverType string
   */
  shoesSize: string;
  /**
   *
   *
   * @serverType string
   */
  picture: string;
  /**
   *
   *
   * @serverType string
   */
  politicalStatus: string;
  /**
   *
   *
   * @serverType string
   */
  marriage: string;
  /**
   *
   *
   * @serverType string
   */
  nativePlace: string;
  /**
   *
   *
   * @serverType string
   */
  birthPlace: string;
  /**
   *
   *
   * @serverType string
   */
  nation: string;
  /**
   *
   *
   * @serverType string
   */
  phone: string;
  /**
   *
   *
   * @serverType string
   */
  qqNo: string;
  /**
   *
   *
   * @serverType string
   */
  mailingAddress: string;
  /**
   *
   *
   * @serverType string
   */
  parentName: string;
  /**
   *
   *
   * @serverType string
   */
  parentPhone: string;
  /**
   *  int32
   *
   * @serverType integer
   */
  isCome: number;
  /**
   *
   *
   * @serverType string
   */
  time: string;
}
/*
 * @namespace models
 */
export interface Statistics {
  /**
   *
   *
   * @serverType string
   */
  name: string;
  /**
   *  int32
   *
   * @serverType integer
   */
  count: number;
  /**
   *  int32
   *
   * @serverType integer
   */
  type: number;
}
/*
 * @namespace models
 */
export interface StuInfoStatus {
  /**
   *  int32
   *
   * @serverType integer
   */
  grade: number;
  /**
   *
   *
   * @serverType string
   */
  major: string;
  /**
   *
   *
   * @serverType array
   */
  items: Statistics[];
}
/*
 * @namespace models
 */
export interface User {
  /**
   *  int32
   *
   * @serverType integer
   */
  id: number;
  /**
   *
   *
   * @serverType string
   */
  username: string;
  /**
   *
   *
   * @serverType string
   */
  password: string;
  /**
   *
   *
   * @serverType string
   */
  nickname: string;
  /**
   *
   *
   * @serverType string
   */
  role: string;
  /**
   *
   *
   * @serverType string
   */
  collegeCode: string;
  /**
   *
   *
   * @serverType string
   */
  studentId: string;
}
export interface DataResponse<T> extends RestfulData {
  data?: T;
}

export interface PageResponse<T> extends DataResponse<T> {
  total: number;
  page: number;
  pageSize: number;
}
