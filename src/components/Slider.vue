<template>
  <div class="slider">
	<div class="slide-track">
        <article class="text-gray hover:text-white opacity-80 hover:opacity-100">
            <div class="lazyload-wrapper w-[50px] m-auto">
                <img class="w-full h-full Up" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAtCAYAAAAOYyOGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIUSURBVHgB7ZnbbcIwFIZtE4G4CJUROkHpBrABnYB0AkaAblAmaNigG7QbNExQNoAHEC9A+p8KozQNgZA4thGfFHJxCPqwj3Nsc7ZntVr1OOeDIAg6LANCiFG1Wn1hGuH0AaEhdiOWE7rF+HK5dFFDbyxndIrht0WfKWC3243W6/WQaYCj6QVMITpqTLmUKhAyn9g8/GGTf2W2SkniWoL1UsR2u31qNpvv8lywK8BxnEH4/CqkognDVUhFuUnZwk3KFm5StuAwC8F7aYGdj22K0YAfLbdKimSwjRuNxiuS2cWx+2ySmpVKpS6S19mpG22JqRmy8bOECBukUgkRpje/o0Lz+fyuUqn00VHc49RDnB06DJPHU4lC5XL5A4dteQ33unIUbGrzSyVEoMY8TPT8TiKZKJUYQ61Wi7r1aVwZiWHKr22aVGINyWPEjwuxSdwDcL1nktTJJof4P0y6HhPD0P7blI4iTQx59Xr9WZajuXnILuSErI+yRxOkUncKLF7soVardSl90iq1T0y74XeMJEFI8kcMz7qT+aC2mMooRLjhGAsnuFqkchCStKmGohcLl8pRyJcxFC0oVKoIIaIwqaKECEFLIkwxRQoRYrPZjJlCihYiBC2BIBFUstKnQ4jg8oAWtLHr44sdlgNJQgTeMV9MgRDBmSbOzGRSCxEmz1FcJESYKnWxEGGiVCYhwjSpzELED5KOTcQ0JL9rAAAAAElFTkSuQmCC" alt="SIEM - Security Information and Event Management"></div>
                <h5 class="h-20 text-center">SIEM - Security Information and Event Management</h5>
        </article>
        <article class="text-gray hover:text-white opacity-80 hover:opacity-100">
            <div class="lazyload-wrapper w-[50px] m-auto">
                <img class="w-full h-full Up" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPvSURBVHgB7VnpVdtAEB4bA4/DRK4gogKggtgVhFQQU0FCBZYrACqIqAA6iKgAU0HUgR3O97icb8iu3yLv6gBb0hP7/bCkvbSfZnYuE1lYWFhYWFhYWMwHtbjOq6srr16v92hGeH5+7jebTY/vb25uxjQHqO/QoU4fDJZw1WEJVx2WcNVhCVcdlnDV0UjoDxCb0gwRyBuOeWk+CKiquL6+7t7d3X2nqgNZXBvZ1h/OuEDYzTJXq9LvSd3W1tZqYlNvSi3H43GAy/76+vpA1397e3uAMT/FY7iyshJSBiSd4bzRB1FP1zEcDp3l5eUTkG3LtlqtFlJGlIIwSIzov1R905ilpaUDlayY95cyonDCgmzHpMIMHDE+Gt1oOyT8iTKicMLY9B7OvZEsVNnFxdP14WNtU0YUHXj0QfY0bsDi4qIX0+2wxaYMKJJwCLJe3ACWLjQg1s/CE2Tyw4URxkY7SWMg3TYlo4sAJLVqF0XYT+M/Id2vlAIYdyLOeiIKIQzpauNo3jQHLEpTWsm5cFu/05DOnTCkEeiky4EFb5peB/8upQeTPk+KrYsg7OvaEUWxr3UbjUbIz1ljZAEHWZiPucaQVuuHZ5S6aVNLqPNZtI1VUYmP3w281wNpgiZN8ahRCQAr60v3gw+yKVU+JokJQeo4KTnBmvurq6uHalspKh7Y2Bd5//j46CpdoWHKBcYxkRHFAFrTixqy2NBy1v8eAj6CjT21QfhQVz6D/C4Jw4UNn+HZ1awzbLVaI8ztoJ8NnUN6cIb1C9eJz89VwrrsBqrpqs+s2myxxaMpxm7xDyccWJPJhGR+Z1tZL3fCUyoIglFfy+7pxYA9PDz4hqUmR4BJi6jNqN6I2LryvmwFAIkeDNZL+oePpOt32G1J48bXy8vLvYWFhRPdYKyzJe9zJQxJfM4wvGcgK9diEqF83tjYOMVHYilPnWfVDuRtpVvRBpAK6Q24v7/XVTuChGm5E96KNkBSA8qOEG5pah4k6SRNzJuwGw0ZRWlnRNlwzG4p2ghtcXWD4Qku5H3ugcfT09NutI2jJkqPvq5wwEV5MiQb+BCTqkruhKHCUzkuEobDpHkchHDYqSMrKiOmAClsNpvB5P2UMzgQiFYo2K1Aykdx8zj8xNwf0VCRa1oirXR18/CRvFfrUAzmEFpKTIWYIh8+pxQ5MOfUfMVH2k4wVAO8Z0dtyPvfQyPYCMGgdfA+o7QkZEEeZOOGhRDWt2hjKdJDFWzF05BOAJPt6CorpftDnDcJNdx8axEC0j9CDrxjKhKWTsIqWNpwY57Il92YoS8FAVj7xGpoqQmrYMsO6TmR4GKETGiQ9S9TC4sK4R+Xmbfx1vUKHgAAAABJRU5ErkJggg==" alt="WAF - Web Application Firewall">
            </div>
                <h5 class="h-20 text-center">WAF - Web Application Firewall</h5>
        </article>
        <article class="text-gray hover:text-white opacity-80 hover:opacity-100">
            <div class="lazyload-wrapper w-[50px] m-auto">
                <img class="w-full h-full Up" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATJSURBVHgB7VqJUeMwFP0J5j7GVLDeCjZUsKQC2AoIFcBWQKgAqIBQAdkKCBXAVoA7IAzXcO97u/KO7EiObEhwwG8m40iyZD0d/5JESpT4UKjYCs7Pz33P82pSYFQqle7c3NxppjrJDBKdmJjYx99VGQ2ELy8vP1yJ9xC+urpqYeTWZLTQvb+//7q4uNjt92JVT2B2gxEkS/jj4+MNlxe9WMLzAj0N8p2np6djKSb8arW6ESXQ128ulby0QpKdn59vSgFxe3sbPD8/b2StV5VPhpLwR0dJ+KPj0xGOqSXapnoaem7r+vp6SwoIqKRYGublhUu92Awre7SveVZEwNI6cnmvZ0nD2FiXEQNmd29ycvKXy7tG95BWDIg38feLFBjcgth27enp6QMpUeJzopLlZUZDIBzWsL8XpcCAEDtdWFhom8qcCd/c3GygoV0ZHYSIgtQRBQn1TCfCjIQgznUmIwYGMGZmZup6npNpiUjIpowgsCKXqWL1PM+lIkbK19M0TpAXSgGBfjX0uNzj42OARxilnQgnATOuA2UfSgFxeXm5DMLW8tI9LCH/gvNwE1+iX1IQjBLKJf3RkUtKwyX7BmkYpL0DdRAmrZysUG6qD33q5zkpNMGJMD7Y1UU9yLRBOr1hz9vGoykZENnq+LuMEA5/JCrRtyE/+DhFf3j808ozAK5Lui0DBIliNreg389or+O3mjR2NNRQtoHfCQbgBPUyHf45Ecb5UgejvS0DAJ0SEkX7zRSSNtRQjxpkn/a+S4VM7iH3FEZ/xdE97HCg0l4A2R20Z7TTuY3w4JL9rbYUj3K/Ix1YmnM6GM9E+C3BWcGjYSrjakLHd5NhY4KmI+QH6waGql2QrqeRfhfCtplVs1p3EUYpNxVSSQ+dcFogATNb77cNEm0d0QU0FNH5XzJdgTAShgCo8QoB9a3kBEa/lQyfUrCg3ROLcGrNzs7GYuKU3BiEBvUw+nJ6d3e3rut2dSh+Zvn+Lpz/nz35yQzsLd7eOZRXgvsweXsg7cIMSC3pyxD9YB9WDe3GVkHKLIu66BLqeSa1tCMDQJ8LMzErioJJLNemxsbGYmddGADriQNWU4+ciBFWHwpkAMDHm7YyDERSwCzb3k3OJiOUKe2u0ajR81JNS9OyzAt0LEyLROgwqSMNWQ77/KmpKV+vMzRvCfa3NcSLwajp6YeHh5bYicXMXAxO2vXIVjIUNTTCVBEgZjv08tV20t/tkbDI6yQlr7K+jIBk7zGHh+oPQ+A0xTJz6FxMoEGItZD3FYQ2ubUonZFX15e7sp+Nwo1HqKZAYy5/OC/YAaimbXTapAkamOUDXeWoDu/Z2oMruQ9ipqIQOr1pKhh6xIM2sm1pY0YPMSBOV5Zpi5v0L81TtFO3Cb53CfGAdMNCmg4/fdwtm7vHvU4/WAyOR2SLp8XMK8nGMDr/70q88nJpX/cQ39vVL4j2dE77PiIoXxgFkbd0D9Xl8HN5A7jqcCxhHo3QegokJyi9IRDXXU5DYkua6gAfH2g4Jwkljetc4mpJOoNEI+ntevTTI6XpkcAMvBjmRXHV2b9eEZ0XfHuFAsnkVSlT8hjPdhZXMoLV1qPrpU7ecgF7LnztgRsHIJLabA9mYreP2VmixGfDH+sNi70CrJqDAAAAAElFTkSuQmCC" alt="NIPS - Network Intrusion Prevention System">
                </div>
                    <h5 class="h-20 text-center">NIPS - Network Intrusion Prevention System</h5>
        </article>
        <article class="text-gray hover:text-white opacity-80 hover:opacity-100">
            <div class="lazyload-wrapper w-[50px] m-auto">
                    <img class="w-full h-full Up" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPkSURBVHgB5VmLUdtAEF0J8/+MXUFEB6YC7AqACnAqgA4iKgipAFMBTgWYCnAqiFKBHf7Dz3lPc/JgI+lOJwuZyZuR7fGtdLt3e+/enhyxxP39vTccDnccx6m/vr7W8VcVlxe1o23gum4PPwe4urC5WFtb68mU4WQx7vf71aWlpQM41+Al2REgKP/h4eFnrVYbyBRgHMDd3d0BRtHHiFclP8JAlpeXTyUntAFg1L3FxcUTyxHXIXh8fGxiNgKxhJvWeHt7uzs/P39ZkPOEt7CwcHl1dbUrlkicASzSfaRMWz4ISKmWTUrFBvDRzkewCeJdAMj5OqdVSgLSdSsL3Y6tAS5YOH8mJQIsd0a6NrUfCwAL1pc3m1FJIOt9MzUeBcDRR/T7YgHuurj3cGVlpba6uuoglzfx31c0BWIB3Ht4fX3dMLEdrQFQJlPHhs64KTWx+ILJBsoNkMG5WMwqBqSLAWlq7fihcv+3WICjHed8hJubmzqcsSIF3bNDG35UKpVDsQBHSdcBGYV2YgHMXktn4ypHtsUCLy8vF9O0m4SJXy4pi5JYZhCUMDpKdZE+1s7Pzc0ZzZypXRxA7V5au4soreUxR4iLNM2GBJFHDKpiKRFu3vRRO6cX16bY7VxyAEyUnkKSH6GTFIBRIMxbFkCU4pJzZ9dlSEWmA25YbQTCDTHqmLMjRYMpNJXatCjo/Ktg5AZgCbEFdRC+AnTUw7P+RP8jd7+gzcPPep46GmmYqhAq6ugjE5TTp/jurK+vd3X2FGYIomUjFlEz/01rd7jgkLt9MQAdx/UD8uDYJvUo7p6fn1sYNGO5THWb1h42gjHOTbgaKdI0GXEdOCMIQkuvJoo0pFFTrYJOT5I43xS8n88xsUUAbZ1NpEa1hgoh59sGoertLPWBdmDDACiJM0jesHYA3xvPhtrYvqvDAqN7gLZOqhOjBWKal3Ed4b4u0vBXdJqgzlCrT09PDczuDtZOIyuVmhQzxNgKRxDHuPFAyscR2Mc3MRwLQFFqbv2SEwGc3zQ1HhNzPPIGne5JiUCqdbLYv1OjzGN1JFIKeKSCDc94o0vc5VCocOs34usioN4fHGntkhowE20wC9OpULWqdNU78GWKyUykFjQbGxsdjMSWWJ6wGaDDBQtnY0faJAhtRUYuZid5jgongWfxpV8Tz92jKIS+8m2DyFQysbzjWxt0ygd6khF0HNdRkiDEPuQnKdWkNWFd8/E0Ag/dVm8suctOFi6BOvTtUSzC6Y6JBLcJYubAIDDTw7grC8WWiv8miOLPPXJCtyamcbBVKDQUO/MTMEJMOvny2fAmCF8+KyZf/v0DZZFt7PFjAVkAAAAASUVORK5CYII=" alt="EDR - Endpoint Detection and Response">
                </div>
                <h5 class="h-20 text-center">EDR - Endpoint Detection and Response</h5>
        </article>
        <article class="text-gray hover:text-white opacity-80 hover:opacity-100">
            <div class="lazyload-wrapper w-[50px] m-auto">
                <img class="w-full h-full Up" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALRSURBVHgB7Zr7bdswEMbP8gt+wt5A3SDZQN6gnSDKBG0miDtBs4HdCdpOEG0QbxBtYMPPP/zqd4BUUKqloDgGolX+AEMSacn8dOTdkTSRxWKxWMylkle5Wq288/ns0hVxPB6D4XAYZtVnCp7P526j0XilK+R0Oo16vV5wqc7JuqlarXp0peT1Sof+M6zgsmMFlx0rWMii0+lU4g+SgHv6R/ge9Rn8TNKIdsGkH6MFG48VXHZMEhxy0t/v96dqoeM4I+TG30kTNTKDsN1u31Yqlb8cVKvVCnHwMVUNIf6RhBhhYbbiJbEqmO6N8Z2fJP0tKp5pZMU/rNfrm+Vy+TH9RXT5rySkcMEQkRifm83mEZZ8wXz8B85fsRAxiOu63e4Mh5AEFC64VquF6jUclGpZt16vu2o9XkZIAowLSxjPibEMS5cr09rv9556DQvew8oBTkMcH9LjG2U3JEBbWEJDFmhsYjzCWjNuPMq9rPvQpe9wmMbXkcDRpe/Cmfk4DEiALguH6Hq3mN2M1UJ2Mvhw4vCQdSPqvO12+4XegFdR8eKMiMOcEIzSXU8Fop/eEP0tT3S0ZPyMU5eEiAVD7DhPbAyLhoWCrPpI9DPHYLWcwxQ89QtpEMtIBS8gNjFu0ejPHD+58WwZte5wOOTmxNy9EZfTTsnHixKNWxWRYDRkpl6zQDT6Cad89JrN5kSth6UCKhitYQmOK2EdiNZmGV2IBKe3NHgji5Kp3y+1Hl3apYKRxmGXnUyU4xJ27Tgr+sC7jjz7ictjUOZTwYgTj2iO+kktu7RzF8XROyoY8RjmZH+32+UmBEocLRwtTguhZIxQNEmHIYa7t66kQQc6vbSftiIm8T66vDFiGbtqWXasYCHvkVlpfabudekBvPWZBCA9nbDHp3fCdumyYwWXHSu47GQKlm5pFEneUlLu34cx7XPTOwOmw4bK+ietxWKxWEznNwhfHpyKQLsWAAAAAElFTkSuQmCC" alt="NAC - Network Access Control"></div>
                <h5 class="h-20 text-center">NAC - Network Access Control</h5>
            </article>
            <article class="text-gray hover:text-white opacity-80 hover:opacity-100">
                <div class="lazyload-wrapper w-[50px] m-auto">
                    <img class="w-full h-full Up" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAyCAYAAAAus5mQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALcSURBVHgB7VnbcaswEF2Y++PHR9wBHVzfCq5vBUkHIR3kVhCngsQVBFcQdxCngjgVhA7sD789tnOWQAbLAgvEw5nhzDCIBaTD7iLtrgzKAPv9/mKxWFyjecVt0zQf0X6t1WouacIgDYBUB4TucHSknRvGAPf6jUZjQCmRmCCTwsCX2+3WxuWFyjt43sUxxDu9ZrM5ogRQIiiYsEN6GCVxgViCp0yoCxUXMGSkkpqQgYEmeI8106WEiHMBw+88lQmZFMzlsCZgrleWzWazPenhwAWM+Xz+ktSE/LU4DVarVb/Vak3C9zIgGB5nYKh2GJhwvV73RFJ5EWT8ohOkRBMWDSnBwITQVj9OW0VASrBer/+jM4FJZ46KoC4qgrqoCOqiIqiLiqAufgTBo2hlPB4rh/p5gwPWD5wtyghIgFLl2gjt2pvN5k0Qu1INlgGQs0QZJ1MImM1EiXReAI/fEvHERFh/FgQjErehCTW+0xkABNuiDNxG5nK5ZA2W6of4Ua/ouEgw4UTN5KSImVKJgP9dijI/cfuaqHe7XZ9KAioaFsa3RTmnunz2COIX54uyzHwnkbkwr6c0jyCb2a+HFIoo7QHDoPG9FuNn6VHxWpRpj1eV+6D9TbBoLU6nUztCew64uMHFQTRTlBbZtFCG1PfC2mMcEPSnnHvKGZiUn3FYohyku2HteTLxIdRlHoM5KA/AtI5s1QCc4M8NQxqwojB5g5NLGYPJ4eOvJbeOTBvAiOmsjc7eKCFk8SD7HLT2FFXJBbk/MK10NYsM+bmYjQ5vSBP+TkFkmRl+Z0eRiyVIXyQddlxKSYzr35hKXmQ/hI+uzO/CUArPMdAtBnlQeRZucUsKuwWsuVPklAkyfJ98Jv38xfXJKdW8ldNO9kk4M5eGHUoJnr64jyQF+VQZGC9TGIxXAkvxFRfH/zS7nlrbsQpEvV0jFV+LghbBAIgn/8J0Npodr1PeIcpob+UTdNqHeOeiVXEAAAAASUVORK5CYII=" alt="NIDS - Network Intrusion Detection System">
                    </div>
                    <h5 class="h-20 text-center">NIDS - Network Intrusion Detection System</h5>
                </article>
                <article class="text-gray hover:text-white opacity-80 hover:opacity-100">
                    <div class="lazyload-wrapper w-[50px] m-auto">
                        <img class="w-full h-full Up" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA0CAYAAADWr1sfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANiSURBVHgB7VqLcdpAEF3Jsj22sQMdKBXY6QBXENyBUwFOBZAKYiqAVGBSAaSCkAqiDmD4M8MnbzMcOc4IJHEHiqw3o5F0v9U77d3e3p5FPuj1evnFYuFSRFiW5V1fXzcpZrDUhHa77Z6fn1dBNk/7w0M7D5lMpkUxwSvCw+HwBR9ZIH3ooL37uJBeI8x/9+zs7DfpR2xIO2svjuMq+fXZbPadwjbqOO9AsIzH7DIpizHd6Pf7RyftbMucz+e/bm5uahQBIPeDSVLMSNtkCEyK1RiPHSlZkL6jI8EYYUYcSTtkGEya1XiDev8cDAYeGQCvAXDVLi4uvql5xgkzfEgzXDIAXjDxOgImNnd5efks5xlVaRk+6m0UkFeCqZU7+DB/WED8aTxW8bezZAAgmZXazp6enrq4r6zCQQkzlibpAxkCfIAyCJfEO3eAnH8wlY4LUsJJR0o46UgJJx1vjvDawmM6nbbgvN+vMh3Ho4RhjXAul+N1bpMSjHQMJx2BCMPDqcFZX4hrNBq59J/i4N6SaZycnLThIXl++YkjjB2OCm4Vv/xYEebdCZjC1eYezKQHy+GRRsRq0oI6FmzbbogL73nSjHSWTjpWY5jjwbjlNxXCHtEt7QAH4jD+HncUa8ox4+WYfRLvUOFbzLD/Ps5xPuK7XLURtFGOKtdioYgHv4SJB2N8vccmtyencYfxuNtVF53XnEwmD7yMZXuO+FXoaOXV1ZUVVa4NsiVNwe9AYFkIyT7RgSHk2pqD30FRpOOgyGPYlRJaULHPaimoDH/g1o5RXUsVUKmvuISN/btXPB6PO0odVk95T7mCq04a5TpKZmfTQRSspR+RR9uwy7VEnKcjT0ib6nS7XVfOR+e3EJ9ukka5qR1OOrStpeE2FqD2Rb8ZX1XnY8nVQpjHOG5VU6R0ytWi0nK07pCIInfvP7xcLbniHb3Ns+arUzpL06AtJhxVrnZ/GALqWPp9UtNhHhomV3RB5aZmKelYU2k+/cJHBtRCQdxDCXeb2ohyFDmIexhWrgU7xu6ZSyGguodoo00hJyTZxRMI6uqJulHksrdUoT2B2XLvNhi8jme/NWj5KHLtTCbzjIpfaA+wiukiDcI809aDlI0id6VWfLwn6PlHv6P9OtoQYDsL188NUjeM3D9S5OD7VoVLggAAAABJRU5ErkJggg==" alt="DIP - Detailed Analysis Of Data Packets Passing Through The Network">
                        </div>
                        <h5 class="h-20 text-center">DIP - Detailed Analysis Of Data Packets Passing Through The Network</h5>
                    </article>
                    <article class="text-gray hover:text-white opacity-80 hover:opacity-100">
                        <div class="lazyload-wrapper w-[50px] m-auto">
                            <img class="w-full h-full Up" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAyCAYAAAAus5mQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALcSURBVHgB7VnbcaswEF2Y++PHR9wBHVzfCq5vBUkHIR3kVhCngsQVBFcQdxCngjgVhA7sD789tnOWQAbLAgvEw5nhzDCIBaTD7iLtrgzKAPv9/mKxWFyjecVt0zQf0X6t1WouacIgDYBUB4TucHSknRvGAPf6jUZjQCmRmCCTwsCX2+3WxuWFyjt43sUxxDu9ZrM5ogRQIiiYsEN6GCVxgViCp0yoCxUXMGSkkpqQgYEmeI8106WEiHMBw+88lQmZFMzlsCZgrleWzWazPenhwAWM+Xz+ktSE/LU4DVarVb/Vak3C9zIgGB5nYKh2GJhwvV73RFJ5EWT8ohOkRBMWDSnBwITQVj9OW0VASrBer/+jM4FJZ46KoC4qgrqoCOqiIqiLiqAufgTBo2hlPB4rh/p5gwPWD5wtyghIgFLl2gjt2pvN5k0Qu1INlgGQs0QZJ1MImM1EiXReAI/fEvHERFh/FgQjErehCTW+0xkABNuiDNxG5nK5ZA2W6of4Ua/ouEgw4UTN5KSImVKJgP9dijI/cfuaqHe7XZ9KAioaFsa3RTmnunz2COIX54uyzHwnkbkwr6c0jyCb2a+HFIoo7QHDoPG9FuNn6VHxWpRpj1eV+6D9TbBoLU6nUztCew64uMHFQTRTlBbZtFCG1PfC2mMcEPSnnHvKGZiUn3FYohyku2HteTLxIdRlHoM5KA/AtI5s1QCc4M8NQxqwojB5g5NLGYPJ4eOvJbeOTBvAiOmsjc7eKCFk8SD7HLT2FFXJBbk/MK10NYsM+bmYjQ5vSBP+TkFkmRl+Z0eRiyVIXyQddlxKSYzr35hKXmQ/hI+uzO/CUArPMdAtBnlQeRZucUsKuwWsuVPklAkyfJ98Jv38xfXJKdW8ldNO9kk4M5eGHUoJnr64jyQF+VQZGC9TGIxXAkvxFRfH/zS7nlrbsQpEvV0jFV+LghbBAIgn/8J0Npodr1PeIcpob+UTdNqHeOeiVXEAAAAASUVORK5CYII=" alt="intro.swl3">
                        </div>
                        <h5 class="h-20 text-center">intro.swl3</h5>
                    </article>
                    <article class="text-gray hover:text-white opacity-80 hover:opacity-100">
                        <div class="lazyload-wrapper w-[50px] m-auto">
                            <img class="w-full h-full Up" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAtCAYAAAAOYyOGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIUSURBVHgB7ZnbbcIwFIZtE4G4CJUROkHpBrABnYB0AkaAblAmaNigG7QbNExQNoAHEC9A+p8KozQNgZA4thGfFHJxCPqwj3Nsc7ZntVr1OOeDIAg6LANCiFG1Wn1hGuH0AaEhdiOWE7rF+HK5dFFDbyxndIrht0WfKWC3243W6/WQaYCj6QVMITpqTLmUKhAyn9g8/GGTf2W2SkniWoL1UsR2u31qNpvv8lywK8BxnEH4/CqkognDVUhFuUnZwk3KFm5StuAwC8F7aYGdj22K0YAfLbdKimSwjRuNxiuS2cWx+2ySmpVKpS6S19mpG22JqRmy8bOECBukUgkRpje/o0Lz+fyuUqn00VHc49RDnB06DJPHU4lC5XL5A4dteQ33unIUbGrzSyVEoMY8TPT8TiKZKJUYQ61Wi7r1aVwZiWHKr22aVGINyWPEjwuxSdwDcL1nktTJJof4P0y6HhPD0P7blI4iTQx59Xr9WZajuXnILuSErI+yRxOkUncKLF7soVardSl90iq1T0y74XeMJEFI8kcMz7qT+aC2mMooRLjhGAsnuFqkchCStKmGohcLl8pRyJcxFC0oVKoIIaIwqaKECEFLIkwxRQoRYrPZjJlCihYiBC2BIBFUstKnQ4jg8oAWtLHr44sdlgNJQgTeMV9MgRDBmSbOzGRSCxEmz1FcJESYKnWxEGGiVCYhwjSpzELED5KOTcQ0JL9rAAAAAElFTkSuQmCC" alt="SIEM - Security Information and Event Management">
                            </div>
                            <h5 class="h-20 text-center">SIEM - Security Information and Event Management</h5>
                    </article> 
                    <article class="text-gray hover:text-white opacity-80 hover:opacity-100">
                        <div class="lazyload-wrapper w-[50px] m-auto">
                             <img class="w-full h-full Up" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPvSURBVHgB7VnpVdtAEB4bA4/DRK4gogKggtgVhFQQU0FCBZYrACqIqAA6iKgAU0HUgR3O97icb8iu3yLv6gBb0hP7/bCkvbSfZnYuE1lYWFhYWFhYWMwHtbjOq6srr16v92hGeH5+7jebTY/vb25uxjQHqO/QoU4fDJZw1WEJVx2WcNVhCVcdlnDV0UjoDxCb0gwRyBuOeWk+CKiquL6+7t7d3X2nqgNZXBvZ1h/OuEDYzTJXq9LvSd3W1tZqYlNvSi3H43GAy/76+vpA1397e3uAMT/FY7iyshJSBiSd4bzRB1FP1zEcDp3l5eUTkG3LtlqtFlJGlIIwSIzov1R905ilpaUDlayY95cyonDCgmzHpMIMHDE+Gt1oOyT8iTKicMLY9B7OvZEsVNnFxdP14WNtU0YUHXj0QfY0bsDi4qIX0+2wxaYMKJJwCLJe3ACWLjQg1s/CE2Tyw4URxkY7SWMg3TYlo4sAJLVqF0XYT+M/Id2vlAIYdyLOeiIKIQzpauNo3jQHLEpTWsm5cFu/05DOnTCkEeiky4EFb5peB/8upQeTPk+KrYsg7OvaEUWxr3UbjUbIz1ljZAEHWZiPucaQVuuHZ5S6aVNLqPNZtI1VUYmP3w281wNpgiZN8ahRCQAr60v3gw+yKVU+JokJQeo4KTnBmvurq6uHalspKh7Y2Bd5//j46CpdoWHKBcYxkRHFAFrTixqy2NBy1v8eAj6CjT21QfhQVz6D/C4Jw4UNn+HZ1awzbLVaI8ztoJ8NnUN6cIb1C9eJz89VwrrsBqrpqs+s2myxxaMpxm7xDyccWJPJhGR+Z1tZL3fCUyoIglFfy+7pxYA9PDz4hqUmR4BJi6jNqN6I2LryvmwFAIkeDNZL+oePpOt32G1J48bXy8vLvYWFhRPdYKyzJe9zJQxJfM4wvGcgK9diEqF83tjYOMVHYilPnWfVDuRtpVvRBpAK6Q24v7/XVTuChGm5E96KNkBSA8qOEG5pah4k6SRNzJuwGw0ZRWlnRNlwzG4p2ghtcXWD4Qku5H3ugcfT09NutI2jJkqPvq5wwEV5MiQb+BCTqkruhKHCUzkuEobDpHkchHDYqSMrKiOmAClsNpvB5P2UMzgQiFYo2K1Aykdx8zj8xNwf0VCRa1oirXR18/CRvFfrUAzmEFpKTIWYIh8+pxQ5MOfUfMVH2k4wVAO8Z0dtyPvfQyPYCMGgdfA+o7QkZEEeZOOGhRDWt2hjKdJDFWzF05BOAJPt6CorpftDnDcJNdx8axEC0j9CDrxjKhKWTsIqWNpwY57Il92YoS8FAVj7xGpoqQmrYMsO6TmR4GKETGiQ9S9TC4sK4R+Xmbfx1vUKHgAAAABJRU5ErkJggg==" alt="WAF - Web Application Firewall">
                             </div>
                             <h5 class="h-20 text-center">WAF - Web Application Firewall</h5>
                    </article>
                    <article class="text-gray hover:text-white opacity-80 hover:opacity-100">
                            <div class="lazyload-wrapper w-[50px] m-auto">
                                <img class="w-full h-full Up" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATJSURBVHgB7VqJUeMwFP0J5j7GVLDeCjZUsKQC2AoIFcBWQKgAqIBQAdkKCBXAVoA7IAzXcO97u/KO7EiObEhwwG8m40iyZD0d/5JESpT4UKjYCs7Pz33P82pSYFQqle7c3NxppjrJDBKdmJjYx99VGQ2ELy8vP1yJ9xC+urpqYeTWZLTQvb+//7q4uNjt92JVT2B2gxEkS/jj4+MNlxe9WMLzAj0N8p2np6djKSb8arW6ESXQ128ulby0QpKdn59vSgFxe3sbPD8/b2StV5VPhpLwR0dJ+KPj0xGOqSXapnoaem7r+vp6SwoIqKRYGublhUu92Awre7SveVZEwNI6cnmvZ0nD2FiXEQNmd29ycvKXy7tG95BWDIg38feLFBjcgth27enp6QMpUeJzopLlZUZDIBzWsL8XpcCAEDtdWFhom8qcCd/c3GygoV0ZHYSIgtQRBQn1TCfCjIQgznUmIwYGMGZmZup6npNpiUjIpowgsCKXqWL1PM+lIkbK19M0TpAXSgGBfjX0uNzj42OARxilnQgnATOuA2UfSgFxeXm5DMLW8tI9LCH/gvNwE1+iX1IQjBLKJf3RkUtKwyX7BmkYpL0DdRAmrZysUG6qD33q5zkpNMGJMD7Y1UU9yLRBOr1hz9vGoykZENnq+LuMEA5/JCrRtyE/+DhFf3j808ozAK5Lui0DBIliNreg389or+O3mjR2NNRQtoHfCQbgBPUyHf45Ecb5UgejvS0DAJ0SEkX7zRSSNtRQjxpkn/a+S4VM7iH3FEZ/xdE97HCg0l4A2R20Z7TTuY3w4JL9rbYUj3K/Ix1YmnM6GM9E+C3BWcGjYSrjakLHd5NhY4KmI+QH6waGql2QrqeRfhfCtplVs1p3EUYpNxVSSQ+dcFogATNb77cNEm0d0QU0FNH5XzJdgTAShgCo8QoB9a3kBEa/lQyfUrCg3ROLcGrNzs7GYuKU3BiEBvUw+nJ6d3e3rut2dSh+Zvn+Lpz/nz35yQzsLd7eOZRXgvsweXsg7cIMSC3pyxD9YB9WDe3GVkHKLIu66BLqeSa1tCMDQJ8LMzErioJJLNemxsbGYmddGADriQNWU4+ciBFWHwpkAMDHm7YyDERSwCzb3k3OJiOUKe2u0ajR81JNS9OyzAt0LEyLROgwqSMNWQ77/KmpKV+vMzRvCfa3NcSLwajp6YeHh5bYicXMXAxO2vXIVjIUNTTCVBEgZjv08tV20t/tkbDI6yQlr7K+jIBk7zGHh+oPQ+A0xTJz6FxMoEGItZD3FYQ2ubUonZFX15e7sp+Nwo1HqKZAYy5/OC/YAaimbXTapAkamOUDXeWoDu/Z2oMruQ9ipqIQOr1pKhh6xIM2sm1pY0YPMSBOV5Zpi5v0L81TtFO3Cb53CfGAdMNCmg4/fdwtm7vHvU4/WAyOR2SLp8XMK8nGMDr/70q88nJpX/cQ39vVL4j2dE77PiIoXxgFkbd0D9Xl8HN5A7jqcCxhHo3QegokJyi9IRDXXU5DYkua6gAfH2g4Jwkljetc4mpJOoNEI+ntevTTI6XpkcAMvBjmRXHV2b9eEZ0XfHuFAsnkVSlT8hjPdhZXMoLV1qPrpU7ecgF7LnztgRsHIJLabA9mYreP2VmixGfDH+sNi70CrJqDAAAAAElFTkSuQmCC" alt="NIPS - Network Intrusion Prevention System">
                                </div>
                            <h5 class="h-20 text-center">NIPS - Network Intrusion Prevention System</h5>
                    </article>
                    <article class="text-gray hover:text-white opacity-80 hover:opacity-100">
                        <div class="lazyload-wrapper w-[50px] m-auto">
                            <img class="w-full h-full Up" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPkSURBVHgB5VmLUdtAEF0J8/+MXUFEB6YC7AqACnAqgA4iKgipAFMBTgWYCnAqiFKBHf7Dz3lPc/JgI+lOJwuZyZuR7fGtdLt3e+/enhyxxP39vTccDnccx6m/vr7W8VcVlxe1o23gum4PPwe4urC5WFtb68mU4WQx7vf71aWlpQM41+Al2REgKP/h4eFnrVYbyBRgHMDd3d0BRtHHiFclP8JAlpeXTyUntAFg1L3FxcUTyxHXIXh8fGxiNgKxhJvWeHt7uzs/P39ZkPOEt7CwcHl1dbUrlkicASzSfaRMWz4ISKmWTUrFBvDRzkewCeJdAMj5OqdVSgLSdSsL3Y6tAS5YOH8mJQIsd0a6NrUfCwAL1pc3m1FJIOt9MzUeBcDRR/T7YgHuurj3cGVlpba6uuoglzfx31c0BWIB3Ht4fX3dMLEdrQFQJlPHhs64KTWx+ILJBsoNkMG5WMwqBqSLAWlq7fihcv+3WICjHed8hJubmzqcsSIF3bNDG35UKpVDsQBHSdcBGYV2YgHMXktn4ypHtsUCLy8vF9O0m4SJXy4pi5JYZhCUMDpKdZE+1s7Pzc0ZzZypXRxA7V5au4soreUxR4iLNM2GBJFHDKpiKRFu3vRRO6cX16bY7VxyAEyUnkKSH6GTFIBRIMxbFkCU4pJzZ9dlSEWmA25YbQTCDTHqmLMjRYMpNJXatCjo/Ktg5AZgCbEFdRC+AnTUw7P+RP8jd7+gzcPPep46GmmYqhAq6ugjE5TTp/jurK+vd3X2FGYIomUjFlEz/01rd7jgkLt9MQAdx/UD8uDYJvUo7p6fn1sYNGO5THWb1h42gjHOTbgaKdI0GXEdOCMIQkuvJoo0pFFTrYJOT5I43xS8n88xsUUAbZ1NpEa1hgoh59sGoertLPWBdmDDACiJM0jesHYA3xvPhtrYvqvDAqN7gLZOqhOjBWKal3Ed4b4u0vBXdJqgzlCrT09PDczuDtZOIyuVmhQzxNgKRxDHuPFAyscR2Mc3MRwLQFFqbv2SEwGc3zQ1HhNzPPIGne5JiUCqdbLYv1OjzGN1JFIKeKSCDc94o0vc5VCocOs34usioN4fHGntkhowE20wC9OpULWqdNU78GWKyUykFjQbGxsdjMSWWJ6wGaDDBQtnY0faJAhtRUYuZid5jgongWfxpV8Tz92jKIS+8m2DyFQysbzjWxt0ygd6khF0HNdRkiDEPuQnKdWkNWFd8/E0Ag/dVm8suctOFi6BOvTtUSzC6Y6JBLcJYubAIDDTw7grC8WWiv8miOLPPXJCtyamcbBVKDQUO/MTMEJMOvny2fAmCF8+KyZf/v0DZZFt7PFjAVkAAAAASUVORK5CYII=" alt="EDR - Endpoint Detection and Response">
                            </div>
                            <h5 class="h-20 text-center">EDR - Endpoint Detection and Response</h5>
                    </article>
                    <article class="text-gray hover:text-white opacity-80 hover:opacity-100">
                        <div class="lazyload-wrapper w-[50px] m-auto">
                            <img class="w-full h-full Up" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALRSURBVHgB7Zr7bdswEMbP8gt+wt5A3SDZQN6gnSDKBG0miDtBs4HdCdpOEG0QbxBtYMPPP/zqd4BUUKqloDgGolX+AEMSacn8dOTdkTSRxWKxWMylkle5Wq288/ns0hVxPB6D4XAYZtVnCp7P526j0XilK+R0Oo16vV5wqc7JuqlarXp0peT1Sof+M6zgsmMFlx0rWMii0+lU4g+SgHv6R/ge9Rn8TNKIdsGkH6MFG48VXHZMEhxy0t/v96dqoeM4I+TG30kTNTKDsN1u31Yqlb8cVKvVCnHwMVUNIf6RhBhhYbbiJbEqmO6N8Z2fJP0tKp5pZMU/rNfrm+Vy+TH9RXT5rySkcMEQkRifm83mEZZ8wXz8B85fsRAxiOu63e4Mh5AEFC64VquF6jUclGpZt16vu2o9XkZIAowLSxjPibEMS5cr09rv9556DQvew8oBTkMcH9LjG2U3JEBbWEJDFmhsYjzCWjNuPMq9rPvQpe9wmMbXkcDRpe/Cmfk4DEiALguH6Hq3mN2M1UJ2Mvhw4vCQdSPqvO12+4XegFdR8eKMiMOcEIzSXU8Fop/eEP0tT3S0ZPyMU5eEiAVD7DhPbAyLhoWCrPpI9DPHYLWcwxQ89QtpEMtIBS8gNjFu0ejPHD+58WwZte5wOOTmxNy9EZfTTsnHixKNWxWRYDRkpl6zQDT6Cad89JrN5kSth6UCKhitYQmOK2EdiNZmGV2IBKe3NHgji5Kp3y+1Hl3apYKRxmGXnUyU4xJ27Tgr+sC7jjz7ictjUOZTwYgTj2iO+kktu7RzF8XROyoY8RjmZH+32+UmBEocLRwtTguhZIxQNEmHIYa7t66kQQc6vbSftiIm8T66vDFiGbtqWXasYCHvkVlpfabudekBvPWZBCA9nbDHp3fCdumyYwWXHSu47GQKlm5pFEneUlLu34cx7XPTOwOmw4bK+ietxWKxWEznNwhfHpyKQLsWAAAAAElFTkSuQmCC" alt="NAC - Network Access Control">
                            </div>
                            <h5 class="h-20 text-center">NAC - Network Access Control</h5>
                    </article>
                    <article class="text-gray hover:text-white opacity-80 hover:opacity-100">
                        <div class="lazyload-wrapper w-[50px] m-auto">
                            <img class="w-full h-full Up" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAyCAYAAAAus5mQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALcSURBVHgB7VnbcaswEF2Y++PHR9wBHVzfCq5vBUkHIR3kVhCngsQVBFcQdxCngjgVhA7sD789tnOWQAbLAgvEw5nhzDCIBaTD7iLtrgzKAPv9/mKxWFyjecVt0zQf0X6t1WouacIgDYBUB4TucHSknRvGAPf6jUZjQCmRmCCTwsCX2+3WxuWFyjt43sUxxDu9ZrM5ogRQIiiYsEN6GCVxgViCp0yoCxUXMGSkkpqQgYEmeI8106WEiHMBw+88lQmZFMzlsCZgrleWzWazPenhwAWM+Xz+ktSE/LU4DVarVb/Vak3C9zIgGB5nYKh2GJhwvV73RFJ5EWT8ohOkRBMWDSnBwITQVj9OW0VASrBer/+jM4FJZ46KoC4qgrqoCOqiIqiLiqAufgTBo2hlPB4rh/p5gwPWD5wtyghIgFLl2gjt2pvN5k0Qu1INlgGQs0QZJ1MImM1EiXReAI/fEvHERFh/FgQjErehCTW+0xkABNuiDNxG5nK5ZA2W6of4Ua/ouEgw4UTN5KSImVKJgP9dijI/cfuaqHe7XZ9KAioaFsa3RTmnunz2COIX54uyzHwnkbkwr6c0jyCb2a+HFIoo7QHDoPG9FuNn6VHxWpRpj1eV+6D9TbBoLU6nUztCew64uMHFQTRTlBbZtFCG1PfC2mMcEPSnnHvKGZiUn3FYohyku2HteTLxIdRlHoM5KA/AtI5s1QCc4M8NQxqwojB5g5NLGYPJ4eOvJbeOTBvAiOmsjc7eKCFk8SD7HLT2FFXJBbk/MK10NYsM+bmYjQ5vSBP+TkFkmRl+Z0eRiyVIXyQddlxKSYzr35hKXmQ/hI+uzO/CUArPMdAtBnlQeRZucUsKuwWsuVPklAkyfJ98Jv38xfXJKdW8ldNO9kk4M5eGHUoJnr64jyQF+VQZGC9TGIxXAkvxFRfH/zS7nlrbsQpEvV0jFV+LghbBAIgn/8J0Npodr1PeIcpob+UTdNqHeOeiVXEAAAAASUVORK5CYII=" alt="NIDS - Network Intrusion Detection System">
                        </div>
                            <h5 class="h-20 text-center">NIDS - Network Intrusion Detection System</h5>
                    </article>
                    <article class="text-gray hover:text-white opacity-80 hover:opacity-100">
                        <div class="lazyload-wrapper w-[50px] m-auto">
                            <img class="w-full h-full Up" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA0CAYAAADWr1sfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANiSURBVHgB7VqLcdpAEF3Jsj22sQMdKBXY6QBXENyBUwFOBZAKYiqAVGBSAaSCkAqiDmD4M8MnbzMcOc4IJHEHiqw3o5F0v9U77d3e3p5FPuj1evnFYuFSRFiW5V1fXzcpZrDUhHa77Z6fn1dBNk/7w0M7D5lMpkUxwSvCw+HwBR9ZIH3ooL37uJBeI8x/9+zs7DfpR2xIO2svjuMq+fXZbPadwjbqOO9AsIzH7DIpizHd6Pf7RyftbMucz+e/bm5uahQBIPeDSVLMSNtkCEyK1RiPHSlZkL6jI8EYYUYcSTtkGEya1XiDev8cDAYeGQCvAXDVLi4uvql5xgkzfEgzXDIAXjDxOgImNnd5efks5xlVaRk+6m0UkFeCqZU7+DB/WED8aTxW8bezZAAgmZXazp6enrq4r6zCQQkzlibpAxkCfIAyCJfEO3eAnH8wlY4LUsJJR0o46UgJJx1vjvDawmM6nbbgvN+vMh3Ho4RhjXAul+N1bpMSjHQMJx2BCMPDqcFZX4hrNBq59J/i4N6SaZycnLThIXl++YkjjB2OCm4Vv/xYEebdCZjC1eYezKQHy+GRRsRq0oI6FmzbbogL73nSjHSWTjpWY5jjwbjlNxXCHtEt7QAH4jD+HncUa8ox4+WYfRLvUOFbzLD/Ps5xPuK7XLURtFGOKtdioYgHv4SJB2N8vccmtyencYfxuNtVF53XnEwmD7yMZXuO+FXoaOXV1ZUVVa4NsiVNwe9AYFkIyT7RgSHk2pqD30FRpOOgyGPYlRJaULHPaimoDH/g1o5RXUsVUKmvuISN/btXPB6PO0odVk95T7mCq04a5TpKZmfTQRSspR+RR9uwy7VEnKcjT0ib6nS7XVfOR+e3EJ9ukka5qR1OOrStpeE2FqD2Rb8ZX1XnY8nVQpjHOG5VU6R0ytWi0nK07pCIInfvP7xcLbniHb3Ns+arUzpL06AtJhxVrnZ/GALqWPp9UtNhHhomV3RB5aZmKelYU2k+/cJHBtRCQdxDCXeb2ohyFDmIexhWrgU7xu6ZSyGguodoo00hJyTZxRMI6uqJulHksrdUoT2B2XLvNhi8jme/NWj5KHLtTCbzjIpfaA+wiukiDcI809aDlI0id6VWfLwn6PlHv6P9OtoQYDsL188NUjeM3D9S5OD7VoVLggAAAABJRU5ErkJggg==" alt="DIP - Detailed Analysis Of Data Packets Passing Through The Network">
                        </div>
                        <h5 class="h-20 text-center">DIP - Detailed Analysis Of Data Packets Passing Through The Network</h5>
                    </article>
                    <article class="text-gray hover:text-white opacity-80 hover:opacity-100">
                        <div class="lazyload-wrapper w-[50px] m-auto">
                            <img class="w-full h-full Up" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAyCAYAAAAus5mQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALcSURBVHgB7VnbcaswEF2Y++PHR9wBHVzfCq5vBUkHIR3kVhCngsQVBFcQdxCngjgVhA7sD789tnOWQAbLAgvEw5nhzDCIBaTD7iLtrgzKAPv9/mKxWFyjecVt0zQf0X6t1WouacIgDYBUB4TucHSknRvGAPf6jUZjQCmRmCCTwsCX2+3WxuWFyjt43sUxxDu9ZrM5ogRQIiiYsEN6GCVxgViCp0yoCxUXMGSkkpqQgYEmeI8106WEiHMBw+88lQmZFMzlsCZgrleWzWazPenhwAWM+Xz+ktSE/LU4DVarVb/Vak3C9zIgGB5nYKh2GJhwvV73RFJ5EWT8ohOkRBMWDSnBwITQVj9OW0VASrBer/+jM4FJZ46KoC4qgrqoCOqiIqiLiqAufgTBo2hlPB4rh/p5gwPWD5wtyghIgFLl2gjt2pvN5k0Qu1INlgGQs0QZJ1MImM1EiXReAI/fEvHERFh/FgQjErehCTW+0xkABNuiDNxG5nK5ZA2W6of4Ua/ouEgw4UTN5KSImVKJgP9dijI/cfuaqHe7XZ9KAioaFsa3RTmnunz2COIX54uyzHwnkbkwr6c0jyCb2a+HFIoo7QHDoPG9FuNn6VHxWpRpj1eV+6D9TbBoLU6nUztCew64uMHFQTRTlBbZtFCG1PfC2mMcEPSnnHvKGZiUn3FYohyku2HteTLxIdRlHoM5KA/AtI5s1QCc4M8NQxqwojB5g5NLGYPJ4eOvJbeOTBvAiOmsjc7eKCFk8SD7HLT2FFXJBbk/MK10NYsM+bmYjQ5vSBP+TkFkmRl+Z0eRiyVIXyQddlxKSYzr35hKXmQ/hI+uzO/CUArPMdAtBnlQeRZucUsKuwWsuVPklAkyfJ98Jv38xfXJKdW8ldNO9kk4M5eGHUoJnr64jyQF+VQZGC9TGIxXAkvxFRfH/zS7nlrbsQpEvV0jFV+LghbBAIgn/8J0Npodr1PeIcpob+UTdNqHeOeiVXEAAAAASUVORK5CYII=" alt="intro.swl3">
                        </div>
                        <h5 class="h-20 text-center">intro.swl3</h5>
                    </article>                  
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>


@-webkit-keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}
.slider {
    padding: 30px;
  margin: 146px;
  position: relative;
  overflow:hidden;
  width:1120px;
  border-top: 1px solid #80ced7;
  border-bottom: 1px solid #80ced7;
}
.slider::before, .slider::after {
  content: "";
  height: 100px;
  position: absolute;
  width: 200px;
  z-index: 2;
}
.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.slider::before {
  left: 0;
  top: 0;
}
.slider .slide-track {
  -webkit-animation: scroll 30s linear infinite;
          animation: scroll 30s linear infinite;
  display: flex;
  width: calc(250px * 14);
}
.slider .slide {
  height: 150px;
  width: 250px;
}
@media (max-width: 1023px) {
  .slider{
    width:72%;
    margin:0;
  }
}
</style>