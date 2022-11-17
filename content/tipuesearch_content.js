var tipuesearch = {"pages": [{'title': 'About', 'text': 'cmsite \n', 'tags': '', 'url': 'About.html'}, {'title': 'HW', 'text': '', 'tags': '', 'url': 'HW.html'}, {'title': 'W10', 'text': '這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕. \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  editor1 結束  \n 查驗輸入字串程式: \n 查驗輸入字串 \n  判斷輸入字串是否aA1$, 且至少 8 個字元-開始  \n \n \n  判斷輸入字串是否aA1$, 且至少 8 個字元-結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  editor2 結束  \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n', 'tags': '', 'url': 'W10.html'}, {'title': 'W11', 'text': '\n # 導入 ast 模組是希望利用其 literal_eval() 將 dict 格式的字串轉為 dict 資料型別 \n # 以利隨後的取值運算 \n import   ast \n # 定義一個函式, 以班級代號字串作為輸入, 可以傳回各班修課學員的學號數列 \n def   get_stud ( c_name ):\n      # 將課程的班級代號字串作為 dict 的 key, 而 2022 fall 的課程代號作為對應值 \n      # 使用者可以利用班級代號從 courses dict 取出課程代號 \n      courses   =  { "1a" :  "0747" ,  "1b" :  "0761" ,  "2a" :  "0773" ,  "2b" :  "0786" }\n      # 利用 c_name 從 courses 得到該學期的課程代號 \n      c   =   courses [ c_name ]\n      # 利用課程代號從學校教務主機取的該班修課人員名單 \n      url   =   "https://nfu.cycu.org/?semester=1111&courseno="   +   c   +   "&column=True" \n      # 讀出各修課人員資料後, 以跳行符號切割, 得到的 data 為數列 \n      data   =   open ( url ). read (). split ( "\\n" )\n      # 因為最後一筆資料為空字串, 因此利用數列運算將其去除 \n      stud   =   data [: - 1 ]\n      # get_stud() 函式最後將對應班級的修課人員學號以數列格式傳回 \n      return   stud \n # 利用 "1b" 作為輸入從 get_stud() 取出該班修課學員學號數列 \n cp_stud   =   get_stud ( "1b" )\n # get w10 quiz result \n # # 以下為 1b w10 quiz 考試結果的 JSON 檔案 \n cp_w10_quiz_url   =   "https://gist.githubusercontent.com/mdecycu/9df4b372ac1b7386cf259ced15f1a2b2/raw/a6825f13b1bb0b61e09e74dd117729eefe1d947f/20221110_cp1b_w10_quiz.json" \n def   get_score ( url ):\n      # 利用 open() 與 read() 讀取考試結果 JSON 檔案 \n      json_data   =   open ( url ). read ()\n      # 利用 ast.literal_eval() 將字串 dict, 轉為程式可用的 dict 資料型別 \n      big_dict   =   ast . literal_eval ( json_data )\n      # 從 big_dict 中, 取出 body 中的 testuser 欄位資料 \n      data   =   big_dict [ "body" ][ "testuser" ]\n      # 定義一個空 dict 資料變數, 隨後利用迴圈逐一將學號作為 key, 考試成績為 valude \n      # 組成 quiz_dict 的資料內容, 以便之後可以用學號當作輸入, 取得該員考試成績 \n      quiz_dict   =  {}\n      for   i   in   data :\n          # data 資料中的 user_name 為考試學員的帳號, 也就是學號 \n          stud_id   =   data [ i ][ "user_name" ]\n          # data 資料中的 total_score 欄位為考試成績 \n          # 因為考試成績為字串, 先轉為浮點數後, 再轉為整數 \n          stud_score   =   int ( float ( data [ i ][ "total_score" ]))\n          # 逐一以學號為 key, 考試成績為對應 value, 將資料放入 quiz_dict \n          quiz_dict [ stud_id ]  =   stud_score \n      # 取得各學員的考試成績 quiz_dict 後, 將資料傳回 \n      return   quiz_dict \n # 從考試 JSON 檔案中取得考試結果的字典資料 \n cp_quiz   =   get_score ( cp_w10_quiz_url )\n # 設定一個空數列, 隨後將利用 append() 方法, 將缺考學員學號存入 \n cp_abs   =  []\n # 從修課學員數列中, 逐一按照學號次序, 以重複迴圈將學號對應至 stud 變數 \n for   stud   in   cp_stud :\n      # 因為缺考學員在考試結果的 dict 中並無資料, 因此利用 try except 進行判斷 \n      try :\n          # 針對 stud 學號, 有考試成績者, 列出其學號與得分 \n          print ( stud ,  cp_quiz [ stud ])\n      except :\n          # 缺考者沒有 quiz 成績, 則在其成績欄位印出"缺" \n          print ( stud ,  "缺" )\n          # 同時將缺考學員學號以 append() 方法逐一置入 \n          cp_abs . append ( stud )\n # 列出缺考名單 \n print ( "=" * 20 )\n print ( "以下為 w10 缺考名單:" )\n # 因為 cp_abs 資料為 list, 在此利用 for 迴圈逐一列出 \n for   stud   in   cp_abs :\n      print ( stud ) \' \n \n', 'tags': '', 'url': 'W11.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束 ', 'tags': '', 'url': 'Brython.html'}]};