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
  default: number;
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
   *  int32
   *
   * @serverType integer
   */
  gender: number;
  /**
   *  int64
   *
   * @serverType integer
   */
  birthDay: number;
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
   *  int32
   *
   * @serverType integer
   */
  marriage: number;
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
   *  int64
   *
   * @serverType integer
   */
  time: number;
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
export interface StudentStation {
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
  station: string;
  /**
   *  int32
   *
   * @serverType integer
   */
  peopleNum: number;
  /**
   *  int32
   *
   * @serverType integer
   */
  baggageNum: number;
  /**
   *  int64
   *
   * @serverType integer
   */
  arriveTime: number;
  /**
   *  int32
   *
   * @serverType integer
   */
  isNeed: number;
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
