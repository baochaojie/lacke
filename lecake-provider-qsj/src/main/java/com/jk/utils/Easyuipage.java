/** 
 * <pre>项目名称:Book-qsj 
 * 文件名称:Easyuipage.java 
 * 包名:com.jk.qsj.utils 
 * 创建日期:2019年2月16日上午10:14:36 
 * Copyright (c) 2019, yuxy123@gmail.com All Rights Reserved.</pre> 
 */  
package com.jk.utils;

/** 
 * <pre>项目名称：Book-qsj    
 * 类名称：Easyuipage    
 * 类描述：    
 * 创建人：乔世杰 17539595870
 * 创建时间：2019年2月16日 上午10:14:36    
 * 修改人：乔世杰 17539595870
 * 修改时间：2019年2月16日 上午10:14:36    
 * 修改备注：       
 * @version </pre>    
 */
public class Easyuipage {
          private  Integer total;
          
          private  Object rows;

		public Integer getTotal() {
			return total;
		}

		public void setTotal(Integer total) {
			this.total = total;
		}

		

		public Object getRows() {
			return rows;
		}

		public void setRows(Object rows) {
			this.rows = rows;
		}

		/* (non-Javadoc)    
		 * @see java.lang.Object#toString()    
		 */
		@Override
		public String toString() {
			return "Easyuipage [total=" + total + ", rows=" + rows + "]";
		}
          
}
