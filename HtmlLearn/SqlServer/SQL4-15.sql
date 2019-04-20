----CREATE TABLE TUser
----(
----Id INT PRIMARY KEY IDENTITY,
----UserName NVARCHAR NOT NULL,
----[Password] NVARCHAR NOT NULL
----)
----CREATE TABLE TProblem
----(
----Id INT PRIMARY KEY IDENTITY,
----Title NVARCHAR NOT NULL,
----Content NVARCHAR NOT NULL,
----NeedRemoteHelp BIT NOT NULL,
----PublishDateTime TIME NOT NULL
----)
----ALTER TABLE TProblem
----ALTER COLUMN Title NVARCHAR(50) 
----ALTER TABLE TProblem
----ALTER COLUMN Content NVARCHAR(50)
----ALTER TABLE TProblem
----ALTER COLUMN NeedRemoteHelp BIT 
----ALTER TABLE TProblem
----ALTER COLUMN PublishDateTime DATETIME 
----INSERT INTO TProblem (Title,Content,NeedRemoteHelp,PublishDateTime)
----VALUES(N'芦苇',N'没写作业',0,2019-04-01)
----CREATE TABLE TProfile
----(
----Id INT PRIMARY KEY IDENTITY,
----[Name] NVARCHAR(50) NOT NULL,
----Province NVARCHAR(20)NOT NULL,
----Birthday DATETIME,
----UserID INT NOT NULL,
----CONSTRAINT KF_UserID_TUserID Foreign Key (UserID) REFERENCES TUser(Id)
----)
----CREATE TABLE TKeyword
----(
----Id INT PRIMARY KEY IDENTITY,
----[Name] NVARCHAR(50) NOT NULL
----)
----CREATE TABLE TProblemKeyword
----(
----ProblemID INT NOT NULL,
----KeywordID INT NOT NULL
----CONSTRAINT FK_TProblemKeyword_TKeyword FOREIGN KEY (KeywordID)REFERENCES Tkeyword(ID)
----CONSTRAINT FK_TProblemKeyword_TProblem FOREIGN KEY (ProblemID) REFERENCES [TProblem]([Id]) 
----)
----CREATE TABLE TBdppq
----(
----[Name] NVARCHAR NOT NULL,
----[Password] NVARCHAR NOT NULL
----)
----ALTER TABLE TBdppq
----ALTER COLUMN [Name] NVARCHAR(50)  
----ALTER TABLE TBdppq
----ALTER COLUMN [Password] NVARCHAR(50) 
----INSERT INTO TBdppq (Name,Password)VALUES(N'兵乓球小王子',1234565)
----DELETE TBdppq  --删除表数据
----DROP TABLE TBdppq  --删除表本身
----ALTER TABLE TProblem ADD Reward NVARCHAR(50) NULL 
----ALTER TABLE TProblem ADD Author NVARCHAR(50) NULL 
----INSERT INTO TProblem(Reward,Author)VALUES(20,N'飞哥')
----INSERT INTO TProblem(Reward,Author)VALUES(10,N'飞哥')
----INSERT INTO TProblem(Reward,Author)VALUES(70,N'飞哥')
----INSERT INTO TProblem(Reward,Author)VALUES(40,N'飞哥')
----INSERT INTO TProblem(Reward,Author)VALUES(30,N'小王子')
----INSERT INTO TProblem(Reward,Author)VALUES(50,N'小王子')
----INSERT INTO TProblem(Reward,Author)VALUES(30,N'小王子')
----INSERT INTO TProblem(Reward,Author)VALUES(10,N'芦苇')
----SELECT DISTINCT FROM TProblem 

--1.使用SELECT INTO，以TProblem中的数据为基础，新建一个Author和Reward都没有NULL值的新表：TNewProblem表
----SELECT Author,Reward
----INTO TNewProblem
----FROM TProblem
----WHERE Author IS NOT NULL AND Reward IS NULL 

--2.使用INSERT SELECT, 将TProblem中Reward为NULL的行再次插入到TProblem中
----INSERT TProblem
----SELECT Title,Content,NeedRemoteHelp,PublishDateTime,Reward,Author FROM TProblem
----WHERE Reward  IS NULL

--3.使用OVER，统计出每个Author悬赏值的平均值、最大值和最小值，去除重复数据，然后用新表TProblemStatus存放
----SELECT DISTINCT Reward,
----AVG(Reward) OVER(PARTITION BY Reward) 平均值,
----MAX(Reward) OVER(PARTITION BY Reward) 最大值,
----MIN(Reward) OVER(PARTITION BY Reward) 最小值
----INTO TProblemStatus
----FROM TProblem

--4.使用CASE...WHEN，颠倒TProblem中的NeedRemote
--UPDATE TProblem  SET NeedRemoteHelp = (CASE NeedRemoteHelp WHEN 1 THEN 0 ELSE 1 END)

----SELECT P.Title,U.UserName
----FROM TProblem P INNER JOIN TUser U ON P.Author=U.Id

----DELETE U.UserName
----FROM TProblem P FULL JOIN TUser U ON P.Author=U.Id
----WHERE Title IS NULL 

----CREATE TABLE Tkey
----(
----Id INT PRIMARY KEY IDENTITY,
----[key] NVARCHAR(20) NOT NULL
----)

----SELECT P.Author,U.UserName
----FROM TUser U FULL JOIN TProblem P ON P.Author= U.inviter

----CREATE TABLE TSuggest 
----(
----Id INT PRIMARY KEY IDENTITY,
----Titer NVARCHAR(50) NOT NULL,
----Content NVARCHAR(50) NOT NULL,
----PublishTime DATETIME NOT NULL,
----Kind NVARCHAR(20)
----Auhthor INT 
----)

----CREATE TABLE TArticle
----(
----Id INT PRIMARY KEY IDENTITY,
----Titer NVARCHAR(50) NOT NULL,
----Content NVARCHAR(50) NOT NULL,
----PublishTime DATETIME NOT NULL,
----Category INT,
----Auhthor INT 
----)

--SELECT P.Title,P.Content,P.PublishDateTime,P.Author
--FROM TProblem P FULL JOIN TSuggest S ON P.Id=S.Id 
--FULL JOIN TArticle A ON S.Id=A.Id 

-------------------------------------4.7日作业以下
----SELECT Author,Reward FROM TProblem adj
----WHERE Reward = 
----(SELECT MIN(Reward)FROM TProblem adv WHERE adj.Author=adv.Author GROUP BY Author)

----SELECT * FROM TUser 
----WHERE UserName IN (SELECT UserName FROM TUser WHERE Id NOT IN (SELECT inviter FROM TUser) )

----UPDATE TProblem SET Reward=Reward*2
----SELECT ProblemID FROM TProblemKeyword
----GROUP BY ProblemID
----HAVING COUNT(ProblemID)>3

----SELECT P.Author,U.UserName FROM TProblem P
----FULL JOIN TUser U ON U.Id=P.Author
----GROUP BY P.Author,U.UserName
----HAVING COUNT(Author)>1

----SELECT MAX(PublishDateTime) FROM TProblem
------WHERE PublishDateTime =(SELECT MAX(PublishDateTime)FROM TProblem)
----GROUP BY Author
------ORDER BY Author,PublishDateTime

--SELECT MIN(Reward),Author FROM TProblem
--GROUP BY Author
--HAVING MIN(Reward)>5

-----------------------------------------4.9中午作业
--CREATE TABLE TMessage
--(
--Id INT,
--FromUser INT,
--ToUser INT,
--UrgentLevel INT,
--Kund INT,
--HasRead INT,
--lsDelete INT,
--Content INT
--)
--GO
--ALTER TABLE TMessage
--ADD CONSTRAINT AK_Kund UNIQUE (FromUser)
--GO
--SELECT Kund,[type],is_unique,is_primary_key,is_unique_constraint FROM SYS.indexes
--WHERE [FromUser] = 'AK_FromUser'
--DROP INDEX TMessage.AK_FromUser
--GO

--CREATE CLUSTERED INDEX CLU_Id ON TMessage(Id)
--ALTER TABLE TMessage
--ADD CONSTRAINT PK_Id PRIMARY KEY(Id)
--GO

--ALTER TABLE TMessage
--ADD CONSTRAINT FK_Content FOREIGN KEY (Content)REFERENCES TUser(Id)
--GO
--SELECT Kund,[type],is_unique,is_primary_key,is_unique_constraint FROM SYS.indexes
--WHERE [Content] = 'FK_Content'
---------------------------------------4.12作业
--SELECT Title,数量,Author FROM(
--SELECT Title,数量,Author,
--ROW_NUMBER()OVER (PARTITION BY Author ORDER BY 数量 DESC)AS 分组
--FROM
--(SELECT COUNT(TProblemKeyword.ProblemID) AS 数量,ProblemID
--FROM TProblemKeyword
--GROUP BY ProblemID
--)Number
--JOIN TProblem ON TProblem.Id = ProblemID) sadsf
--WHERE 分组 = 1

--------------------------------------4.13作业
--添加帮帮币
--ALTER TABLE TUser
--ADD BMoney INT 

--SET XACT_ABORT ON

--添加约束小于0报错
--ALTER TABLE TUser 
--ADD CONSTRAINT PK_BMoney CHECK(BMoney>0)

--发布求助，更新用户帮帮币数量
--BEGIN TRANSACTION
--BEGIN TRY
--    INSERT TProblem (Title,Reward,Author)VALUES(N'想要帮帮币',20,4)
--    UPDATE TUser SET BMoney = BMoney - 20 WHERE Id = 4
--    COMMIT TRANSACTION
--END TRY
--BEGIN CATCH
--    IF @@TRANCOUNT>0
--        ROLLBACK;
--    THROW;
--END CATCH
--SELECT * FROM TUser

--丢失的更新（假装他是）
--BEGIN TRANSACTION
--  UPDATE TUser SET BMoney = BMoney + 20 WHERE ID = 3
--  BEGIN TRANSACTION
--  UPDATE TUser SET BMoney = BMoney * 2  WHERE ID = 3
--COMMIT TRANSACTION
--COMMIT TRANSACTION

--SELECT @@TRANCOUNT

----脏读 
--BEGIN TRANSACTION
--BEGIN TRY
--  UPDATE TUser SET BMoney = BMoney - 20 WHERE ID = 3  --第一次更新
--     BEGIN TRANSACTION
--	 UPDATE TUser SET BMoney = BMoney -9999   --第二次更新
--	 COMMIT TRANSACTION    --第一次提交  
--  SELECT BMoney FROM TUser   --读取第一次更新的数据
--  COMMIT TRANSACTION      --第二次提交失败 BMoney>0
--END TRY
--BEGIN CATCH
--    IF @@TRANCOUNT>0
--        ROLLBACK;
--    THROW;
--END CATCH

--EXEC sp_lock