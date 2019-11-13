import request from '@/libs/request'

export const getTableData = () => {
  return request.doGet('get_table_data')
}

export const getDragList = () => {
  return request.doGet('get_drag_list')
}

export const errorReq = () => {
  return request.doPost('error_url')
}

export const saveErrorLogger = info => {
  return request.doPost('save_error_logger')
}
