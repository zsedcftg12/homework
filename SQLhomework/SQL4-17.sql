--CREATE TABLE TResponse
--(
--Id INT PRIMARY KEY IDENTITY,
--Content NVARCHAR(500) NOT NULL,
--Authorld INT NOT NULL,
--ProblemId INT NOT NULL,
--CreateTime DATE 
--)

--CREATE VIEW VResponse WITH ENCRYPTION,SCHEMABINDING AS 
--SELECT TResponse.Content,TUser.UserName,Title,CreateTime,[User].UserName,Reward 
--FROM dbo.TResponse
--JOIN dbo.TProblem ON TProblem.Id = ProblemId 
--JOIN dbo.TUser ON TUser.Id = Authorld
--JOIN dbo.TUser AS [User] ON [User].Id = TProblem.Author
--WHERE Reward > 5

--INSERT VResponse(Content) VALUES(N'说的好！！')

--ALTER VIEW VResponse WITH ENCRYPTION,SCHEMABINDING AS 
--SELECT TResponse.Content,TUser.UserName,Title,CreateTime,[User].UserName,Reward 
--FROM dbo.TResponse
--JOIN dbo.TProblem ON TProblem.Id = ProblemId 
--JOIN dbo.TUser ON TUser.Id = Authorld
--JOIN dbo.TUser AS [User] ON [User].Id = TProblem.Author
--WHERE Reward > 5
--WITH CHECK OPTION

--CREATE VIEW VProblemKeyword WITH SCHEMABINDING AS
--SELECT PS.Id,PS.Title,数量,PS.Reward FROM(
--SELECT ProblemID,COUNT(ProblemID) 数量 FROM dbo.TProblemKeyword
--JOIN dbo.TProblem ON TProblem.Id = TProblemKeyword.ProblemID
--GROUP BY ProblemID) 数量表
--JOIN dbo.TProblem AS PS ON PS.Id = 数量表.ProblemID

--SELECT * FROM VProblemKeyword
--DROP VIEW VProblemKeyword

--CREATE UNIQUE CLUSTERED INDEX VIX_Id ON VProblemKeyword()

--SELECT * FROM VResponse
--DROP VIEW VResponse
