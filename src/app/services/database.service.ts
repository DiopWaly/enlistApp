import { Injectable } from '@angular/core';
import { SQLite,SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { StructureDB } from './structure-db';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private db!: SQLiteObject;
  constructor(private sqlite: SQLite) { }
  createOpenDatabase = () => {
    try {
      this.sqlite.create( {
        name: 'enlist.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.db = db;
        // this.createTables('drop table user');
        // this.createTables('drop table merchant');
        this.createTables(StructureDB.USER_TABLE_QUERY);
        this.createTables(StructureDB.MERCHANT_TABLE_QUERY);
        console.log('database created/opened')
      }).catch(e => {
        console.log(JSON.stringify(e))
      })
    } catch (error) {
      console.log(error)
    }
  }

 createTables = (tableQuery: string): void => {
    console.log(tableQuery);
    this.db.executeSql(tableQuery,[])
      .then(() => {
        console.log('table created');
      })
  }
  insertData = (table: string, data: any): Promise<any> => {
    // let query = `insert into ${table}(firstName,lastName) values("Papa Waly","Diop")`;
    let query = `insert into ${table}(`;
    let values = 'values('
    const keys = Object.keys(data)
    console.log('keys : ',keys);
    
    for(let i=0; i < keys.length-1; i++){
      query = query.concat(keys[i]+',')
      values = values.concat('"'+data[`${keys[i]}`]+'",')
    }
    query = query.concat(keys[keys.length-1]+')')
    values = values.concat('"'+data[`${keys[keys.length-1]}`]+'")')
    console.log(`${query} ${values}`);
    return this.db.executeSql(`${query} ${values}`, [])
    // .then(() => console.log('record insert'))
    // .catch(e => console.log(JSON.stringify(e)))
  }
  get = (table: string):Promise<any> => {
    let query = `Select * from ${table}`;
    console.log(query);
    return this.db.executeSql(query, [])
  }
  delete = (table: string, id: number): Promise<any> => {
    console.log(`delete from ${table} where id=${id}`);
    
    return this.db.executeSql(`delete from ${table} where id=${id}`)
  }
  update = (table: string, id: number, data: any): Promise<any> => {
    let query = 'SET '
    const keys = Object.keys(data)
    for(let i=0; i < keys.length-1; i++){
       query = query.concat(keys[i]+' = '+data[`${keys[i]}`]+',')
      }
    query = query.concat(keys[keys.length-1]+' = '+data[`${keys[keys.length-1]}`])
    console.log(`update ${table} ${query} where id=${id}`);
    
    return this.db.executeSql(`update ${table} ${query} where id=${id}`)
  }
  close = () => {
    this.db.close().then(() => console.log('close db')).catch(err => console.log(JSON.stringify(err)))
  }
}
