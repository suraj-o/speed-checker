"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/internet-speed-checker";
exports.ids = ["vendor-chunks/internet-speed-checker"];
exports.modules = {

/***/ "(ssr)/./node_modules/internet-speed-checker/dist/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/internet-speed-checker/dist/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nclass InternetSpeedChecker {\n    convertSpeed(speed) {\n        if (speed === null || speed === 0) {\n            return {\n                value: 0,\n                unit: \"bps\"\n            };\n        }\n        if (speed > 1e9) {\n            return {\n                value: speed / 1e9,\n                unit: \"Gbps\"\n            };\n        } else if (speed > 1e6) {\n            return {\n                value: speed / 1e6,\n                unit: \"Mbps\"\n            };\n        } else if (speed > 1e3) {\n            return {\n                value: speed / 1e3,\n                unit: \"Kbps\"\n            };\n        } else {\n            return {\n                value: speed,\n                unit: \"bps\"\n            };\n        }\n    }\n    async measureDownloadSpeed() {\n        const url = \"https://www.cloudflare.com/cdn-cgi/trace\";\n        const startTime = new Date().getTime();\n        try {\n            const response = await fetch(url);\n            if (!response.ok) {\n                throw new Error(`HTTP error! Status: ${response.status}`);\n            }\n            const reader = response.body?.getReader();\n            if (!reader) {\n                throw new Error(\"ReadableStream not supported.\");\n            }\n            let totalBytes = 0;\n            while(true){\n                const { done, value } = await reader.read();\n                if (done) {\n                    break;\n                }\n                totalBytes += value?.length || 0;\n            }\n            const endTime = new Date().getTime();\n            const durationInSeconds = (endTime - startTime) / 1000;\n            const speedBytesPerSecond = totalBytes / durationInSeconds;\n            this.downloadSpeed = speedBytesPerSecond;\n        } catch (error) {\n            this.downloadSpeed = 0; // Set to 0 if there's an error (no connection)\n            if (error instanceof Error) {\n                console.error(\"Error measuring download speed:\", error.message);\n            } else {\n                console.error(\"Unknown error type:\", error);\n            }\n        }\n    }\n    async measureUploadSpeed() {\n        const uploadData = new Array(1024 * 1024).fill(\"a\").join(\"\");\n        const url = \"https://httpbin.org/post\";\n        const startTime = new Date().getTime();\n        try {\n            const response = await fetch(url, {\n                method: \"POST\",\n                body: uploadData\n            });\n            if (!response.ok) {\n                throw new Error(`HTTP error! Status: ${response.status}`);\n            }\n            const endTime = new Date().getTime();\n            const durationInSeconds = (endTime - startTime) / 1000;\n            const speedBytesPerSecond = uploadData.length / durationInSeconds;\n            this.uploadSpeed = speedBytesPerSecond;\n        } catch (error) {\n            this.uploadSpeed = 0; // Set to 0 if there's an error (no connection)\n            if (error instanceof Error) {\n                console.error(\"Error measuring upload speed:\", error.message);\n            } else {\n                console.error(\"Unknown error type:\", error);\n            }\n        }\n    }\n    getFormattedDownloadSpeed() {\n        return `${this.convertSpeed(this.downloadSpeed).value.toFixed(2)} ${this.convertSpeed(this.downloadSpeed).unit}`;\n    }\n    getFormattedUploadSpeed() {\n        return `${this.convertSpeed(this.uploadSpeed).value.toFixed(2)} ${this.convertSpeed(this.uploadSpeed).unit}`;\n    }\n    startSpeedCheck() {\n        setInterval(()=>{\n            this.measureDownloadSpeed();\n            this.measureUploadSpeed();\n            this.getFormattedDownloadSpeed();\n            this.getFormattedUploadSpeed();\n        }, 1000);\n    }\n    constructor(){\n        this.downloadSpeed = 0;\n        this.uploadSpeed = 0;\n        this.unit = \"bps\" // Initial unit is bps\n        ;\n    }\n}\nconst speedChecker = new InternetSpeedChecker();\nspeedChecker.startSpeedCheck();\nexports[\"default\"] = speedChecker;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaW50ZXJuZXQtc3BlZWQtY2hlY2tlci9kaXN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2JBLDhDQUE2QztJQUFFRyxPQUFPO0FBQUssQ0FBQyxFQUFDO0FBQzdELE1BQU1DO0lBSUZDLGFBQWFDLEtBQUssRUFBRTtRQUNoQixJQUFJQSxVQUFVLFFBQVFBLFVBQVUsR0FBRztZQUMvQixPQUFPO2dCQUFFSCxPQUFPO2dCQUFHSSxNQUFNO1lBQU07UUFDbkM7UUFDQSxJQUFJRCxRQUFRLEtBQUs7WUFDYixPQUFPO2dCQUFFSCxPQUFPRyxRQUFRO2dCQUFLQyxNQUFNO1lBQU87UUFDOUMsT0FDSyxJQUFJRCxRQUFRLEtBQUs7WUFDbEIsT0FBTztnQkFBRUgsT0FBT0csUUFBUTtnQkFBS0MsTUFBTTtZQUFPO1FBQzlDLE9BQ0ssSUFBSUQsUUFBUSxLQUFLO1lBQ2xCLE9BQU87Z0JBQUVILE9BQU9HLFFBQVE7Z0JBQUtDLE1BQU07WUFBTztRQUM5QyxPQUNLO1lBQ0QsT0FBTztnQkFBRUosT0FBT0c7Z0JBQU9DLE1BQU07WUFBTTtRQUN2QztJQUNKO0lBQ0EsTUFBTUMsdUJBQXVCO1FBQ3pCLE1BQU1DLE1BQU07UUFDWixNQUFNQyxZQUFZLElBQUlDLE9BQU9DLE9BQU87UUFDcEMsSUFBSTtZQUNBLE1BQU1DLFdBQVcsTUFBTUMsTUFBTUw7WUFDN0IsSUFBSSxDQUFDSSxTQUFTRSxFQUFFLEVBQUU7Z0JBQ2QsTUFBTSxJQUFJQyxNQUFNLENBQUMsb0JBQW9CLEVBQUVILFNBQVNJLE1BQU0sQ0FBQyxDQUFDO1lBQzVEO1lBQ0EsTUFBTUMsU0FBU0wsU0FBU00sSUFBSSxFQUFFQztZQUM5QixJQUFJLENBQUNGLFFBQVE7Z0JBQ1QsTUFBTSxJQUFJRixNQUFNO1lBQ3BCO1lBQ0EsSUFBSUssYUFBYTtZQUNqQixNQUFPLEtBQU07Z0JBQ1QsTUFBTSxFQUFFQyxJQUFJLEVBQUVuQixLQUFLLEVBQUUsR0FBRyxNQUFNZSxPQUFPSyxJQUFJO2dCQUN6QyxJQUFJRCxNQUFNO29CQUNOO2dCQUNKO2dCQUNBRCxjQUFjbEIsT0FBT3FCLFVBQVU7WUFDbkM7WUFDQSxNQUFNQyxVQUFVLElBQUlkLE9BQU9DLE9BQU87WUFDbEMsTUFBTWMsb0JBQW9CLENBQUNELFVBQVVmLFNBQVEsSUFBSztZQUNsRCxNQUFNaUIsc0JBQXNCTixhQUFhSztZQUN6QyxJQUFJLENBQUNFLGFBQWEsR0FBR0Q7UUFDekIsRUFDQSxPQUFPRSxPQUFPO1lBQ1YsSUFBSSxDQUFDRCxhQUFhLEdBQUcsR0FBRywrQ0FBK0M7WUFDdkUsSUFBSUMsaUJBQWlCYixPQUFPO2dCQUN4QmMsUUFBUUQsS0FBSyxDQUFDLG1DQUFtQ0EsTUFBTUUsT0FBTztZQUNsRSxPQUNLO2dCQUNERCxRQUFRRCxLQUFLLENBQUMsdUJBQXVCQTtZQUN6QztRQUNKO0lBQ0o7SUFDQSxNQUFNRyxxQkFBcUI7UUFDdkIsTUFBTUMsYUFBYSxJQUFJQyxNQUFNLE9BQU8sTUFBTUMsSUFBSSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUN6RCxNQUFNM0IsTUFBTTtRQUNaLE1BQU1DLFlBQVksSUFBSUMsT0FBT0MsT0FBTztRQUNwQyxJQUFJO1lBQ0EsTUFBTUMsV0FBVyxNQUFNQyxNQUFNTCxLQUFLO2dCQUM5QjRCLFFBQVE7Z0JBQ1JsQixNQUFNYztZQUNWO1lBQ0EsSUFBSSxDQUFDcEIsU0FBU0UsRUFBRSxFQUFFO2dCQUNkLE1BQU0sSUFBSUMsTUFBTSxDQUFDLG9CQUFvQixFQUFFSCxTQUFTSSxNQUFNLENBQUMsQ0FBQztZQUM1RDtZQUNBLE1BQU1RLFVBQVUsSUFBSWQsT0FBT0MsT0FBTztZQUNsQyxNQUFNYyxvQkFBb0IsQ0FBQ0QsVUFBVWYsU0FBUSxJQUFLO1lBQ2xELE1BQU1pQixzQkFBc0JNLFdBQVdULE1BQU0sR0FBR0U7WUFDaEQsSUFBSSxDQUFDWSxXQUFXLEdBQUdYO1FBQ3ZCLEVBQ0EsT0FBT0UsT0FBTztZQUNWLElBQUksQ0FBQ1MsV0FBVyxHQUFHLEdBQUcsK0NBQStDO1lBQ3JFLElBQUlULGlCQUFpQmIsT0FBTztnQkFDeEJjLFFBQVFELEtBQUssQ0FBQyxpQ0FBaUNBLE1BQU1FLE9BQU87WUFDaEUsT0FDSztnQkFDREQsUUFBUUQsS0FBSyxDQUFDLHVCQUF1QkE7WUFDekM7UUFDSjtJQUNKO0lBQ0FVLDRCQUE0QjtRQUN4QixPQUFPLENBQUMsRUFBRSxJQUFJLENBQUNsQyxZQUFZLENBQUMsSUFBSSxDQUFDdUIsYUFBYSxFQUFFekIsS0FBSyxDQUFDcUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQ25DLFlBQVksQ0FBQyxJQUFJLENBQUN1QixhQUFhLEVBQUVyQixJQUFJLENBQUMsQ0FBQztJQUNwSDtJQUNBa0MsMEJBQTBCO1FBQ3RCLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQ3BDLFlBQVksQ0FBQyxJQUFJLENBQUNpQyxXQUFXLEVBQUVuQyxLQUFLLENBQUNxQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDbkMsWUFBWSxDQUFDLElBQUksQ0FBQ2lDLFdBQVcsRUFBRS9CLElBQUksQ0FBQyxDQUFDO0lBQ2hIO0lBQ0FtQyxrQkFBa0I7UUFDZEMsWUFBWTtZQUNSLElBQUksQ0FBQ25DLG9CQUFvQjtZQUN6QixJQUFJLENBQUN3QixrQkFBa0I7WUFDdkIsSUFBSSxDQUFDTyx5QkFBeUI7WUFDOUIsSUFBSSxDQUFDRSx1QkFBdUI7UUFDaEMsR0FBRztJQUNQOzthQS9GQWIsZ0JBQWdCO2FBQ2hCVSxjQUFjO2FBQ2QvQixPQUFPLE1BQU8sc0JBQXNCOzs7QUE4RnhDO0FBQ0EsTUFBTXFDLGVBQWUsSUFBSXhDO0FBQ3pCd0MsYUFBYUYsZUFBZTtBQUM1QnhDLGtCQUFlLEdBQUcwQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ludGVybmV0LXNwZWVkLWNoZWNrZXIvLi9ub2RlX21vZHVsZXMvaW50ZXJuZXQtc3BlZWQtY2hlY2tlci9kaXN0L2luZGV4LmpzP2NhMzUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBJbnRlcm5ldFNwZWVkQ2hlY2tlciB7XG4gICAgZG93bmxvYWRTcGVlZCA9IDA7XG4gICAgdXBsb2FkU3BlZWQgPSAwO1xuICAgIHVuaXQgPSBcImJwc1wiOyAvLyBJbml0aWFsIHVuaXQgaXMgYnBzXG4gICAgY29udmVydFNwZWVkKHNwZWVkKSB7XG4gICAgICAgIGlmIChzcGVlZCA9PT0gbnVsbCB8fCBzcGVlZCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IDAsIHVuaXQ6IFwiYnBzXCIgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3BlZWQgPiAxZTkpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBzcGVlZCAvIDFlOSwgdW5pdDogXCJHYnBzXCIgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzcGVlZCA+IDFlNikge1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHNwZWVkIC8gMWU2LCB1bml0OiBcIk1icHNcIiB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNwZWVkID4gMWUzKSB7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogc3BlZWQgLyAxZTMsIHVuaXQ6IFwiS2Jwc1wiIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogc3BlZWQsIHVuaXQ6IFwiYnBzXCIgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBtZWFzdXJlRG93bmxvYWRTcGVlZCgpIHtcbiAgICAgICAgY29uc3QgdXJsID0gXCJodHRwczovL3d3dy5jbG91ZGZsYXJlLmNvbS9jZG4tY2dpL3RyYWNlXCI7XG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IHJlc3BvbnNlLmJvZHk/LmdldFJlYWRlcigpO1xuICAgICAgICAgICAgaWYgKCFyZWFkZXIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWFkYWJsZVN0cmVhbSBub3Qgc3VwcG9ydGVkLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB0b3RhbEJ5dGVzID0gMDtcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBkb25lLCB2YWx1ZSB9ID0gYXdhaXQgcmVhZGVyLnJlYWQoKTtcbiAgICAgICAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdG90YWxCeXRlcyArPSB2YWx1ZT8ubGVuZ3RoIHx8IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBlbmRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjb25zdCBkdXJhdGlvbkluU2Vjb25kcyA9IChlbmRUaW1lIC0gc3RhcnRUaW1lKSAvIDEwMDA7XG4gICAgICAgICAgICBjb25zdCBzcGVlZEJ5dGVzUGVyU2Vjb25kID0gdG90YWxCeXRlcyAvIGR1cmF0aW9uSW5TZWNvbmRzO1xuICAgICAgICAgICAgdGhpcy5kb3dubG9hZFNwZWVkID0gc3BlZWRCeXRlc1BlclNlY29uZDtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuZG93bmxvYWRTcGVlZCA9IDA7IC8vIFNldCB0byAwIGlmIHRoZXJlJ3MgYW4gZXJyb3IgKG5vIGNvbm5lY3Rpb24pXG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBtZWFzdXJpbmcgZG93bmxvYWQgc3BlZWQ6XCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlVua25vd24gZXJyb3IgdHlwZTpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIG1lYXN1cmVVcGxvYWRTcGVlZCgpIHtcbiAgICAgICAgY29uc3QgdXBsb2FkRGF0YSA9IG5ldyBBcnJheSgxMDI0ICogMTAyNCkuZmlsbChcImFcIikuam9pbihcIlwiKTtcbiAgICAgICAgY29uc3QgdXJsID0gXCJodHRwczovL2h0dHBiaW4ub3JnL3Bvc3RcIjtcbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgYm9keTogdXBsb2FkRGF0YSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVuZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNvbnN0IGR1cmF0aW9uSW5TZWNvbmRzID0gKGVuZFRpbWUgLSBzdGFydFRpbWUpIC8gMTAwMDtcbiAgICAgICAgICAgIGNvbnN0IHNwZWVkQnl0ZXNQZXJTZWNvbmQgPSB1cGxvYWREYXRhLmxlbmd0aCAvIGR1cmF0aW9uSW5TZWNvbmRzO1xuICAgICAgICAgICAgdGhpcy51cGxvYWRTcGVlZCA9IHNwZWVkQnl0ZXNQZXJTZWNvbmQ7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLnVwbG9hZFNwZWVkID0gMDsgLy8gU2V0IHRvIDAgaWYgdGhlcmUncyBhbiBlcnJvciAobm8gY29ubmVjdGlvbilcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIG1lYXN1cmluZyB1cGxvYWQgc3BlZWQ6XCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlVua25vd24gZXJyb3IgdHlwZTpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGdldEZvcm1hdHRlZERvd25sb2FkU3BlZWQoKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmNvbnZlcnRTcGVlZCh0aGlzLmRvd25sb2FkU3BlZWQpLnZhbHVlLnRvRml4ZWQoMil9ICR7dGhpcy5jb252ZXJ0U3BlZWQodGhpcy5kb3dubG9hZFNwZWVkKS51bml0fWA7XG4gICAgfVxuICAgIGdldEZvcm1hdHRlZFVwbG9hZFNwZWVkKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5jb252ZXJ0U3BlZWQodGhpcy51cGxvYWRTcGVlZCkudmFsdWUudG9GaXhlZCgyKX0gJHt0aGlzLmNvbnZlcnRTcGVlZCh0aGlzLnVwbG9hZFNwZWVkKS51bml0fWA7XG4gICAgfVxuICAgIHN0YXJ0U3BlZWRDaGVjaygpIHtcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tZWFzdXJlRG93bmxvYWRTcGVlZCgpO1xuICAgICAgICAgICAgdGhpcy5tZWFzdXJlVXBsb2FkU3BlZWQoKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0Rm9ybWF0dGVkRG93bmxvYWRTcGVlZCgpO1xuICAgICAgICAgICAgdGhpcy5nZXRGb3JtYXR0ZWRVcGxvYWRTcGVlZCgpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG59XG5jb25zdCBzcGVlZENoZWNrZXIgPSBuZXcgSW50ZXJuZXRTcGVlZENoZWNrZXIoKTtcbnNwZWVkQ2hlY2tlci5zdGFydFNwZWVkQ2hlY2soKTtcbmV4cG9ydHMuZGVmYXVsdCA9IHNwZWVkQ2hlY2tlcjtcbiJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIkludGVybmV0U3BlZWRDaGVja2VyIiwiY29udmVydFNwZWVkIiwic3BlZWQiLCJ1bml0IiwibWVhc3VyZURvd25sb2FkU3BlZWQiLCJ1cmwiLCJzdGFydFRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwic3RhdHVzIiwicmVhZGVyIiwiYm9keSIsImdldFJlYWRlciIsInRvdGFsQnl0ZXMiLCJkb25lIiwicmVhZCIsImxlbmd0aCIsImVuZFRpbWUiLCJkdXJhdGlvbkluU2Vjb25kcyIsInNwZWVkQnl0ZXNQZXJTZWNvbmQiLCJkb3dubG9hZFNwZWVkIiwiZXJyb3IiLCJjb25zb2xlIiwibWVzc2FnZSIsIm1lYXN1cmVVcGxvYWRTcGVlZCIsInVwbG9hZERhdGEiLCJBcnJheSIsImZpbGwiLCJqb2luIiwibWV0aG9kIiwidXBsb2FkU3BlZWQiLCJnZXRGb3JtYXR0ZWREb3dubG9hZFNwZWVkIiwidG9GaXhlZCIsImdldEZvcm1hdHRlZFVwbG9hZFNwZWVkIiwic3RhcnRTcGVlZENoZWNrIiwic2V0SW50ZXJ2YWwiLCJzcGVlZENoZWNrZXIiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/internet-speed-checker/dist/index.js\n");

/***/ })

};
;