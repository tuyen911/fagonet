<template>
  <div>
    <main class="main-services">
      <div class="img-services">
        <img src="https://fagonet.com/assets/Icon04-2-43cffde5.png">
      </div>
      <div class="services">
        <a class="scale hover" href="/services/managed-security-service">
          <div class="lazyload-wrapper ">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAADJ0lEQVR4Ae2a+3HaQBDGFxzD8BzogBLoINABrgDTgVOB7QqCKwhUEFJBcAVxOlAHEF7DHzzyLSMyjiKc3dNJPHy/GUbMSUL6tJ+4u70lcjgcjjMiRQkyGo0q2Wy2ja+t7XZbSafT3eVy+VytVj1KiEQET6fTxtXV1T1ENsL2p1KpwWq16pfL5QHFTGyCWSSEtPC1jW1FeJqHzxAP5qlYLL5QDFgVHLBsg6LxEoflrQj+n2WjYtPyxoINLUt4KGO2LKJ3T3o8imh5lWBTy7JIbPrYDkql0pDb5vP5lqJhZHmx4MVi8V1rWRw/xE0NcrlcHy4Yv95nQfAf2PL5fP5GdCwJkd7g3rKwXDco0uT3pBQKBZGWD2SBMMueKpEE7y0LO/XfiuYpEUkwbNukMyNN7wwn+NJxgi8dJ/jScYIvHSf40nGC3+Cf2RBnQOjM0MyWWPBfAjOZzAgTeTJBOmEPMpvN6piK/gg0eyREHGF/kn90NptNLdiGB+CREI2lf9IJAHH1YBuC8YuEaATHshKgBfnvj8E2zryQEI2lT0Iw7iMswuJ7EwtG5p9/9Kjv8WQy4cR/sGcYaxKHYsFIdo/x/hw1ykgYtkKan0mBauDB6zt0JNDn1/DA28F2PISvpEAleL1e82LWUWx9fX39ENLs8aoGKVAJZlujH3yihDkUXTAkJeqxNGzdpYSjfCC6bOdHUqIWnHSUMZS8PRDdHuzskRKj2VJSUfatHLaO7JlElzESzFFGZ290QQ2YnPA/cC3YDrEPJtHdnUuG+MuhQ4oJzMK+YFMP2dXT/jO/JlICAII7pJiaSfHF3obsMrbynkiC2VawtmjlXQK/s1xpQOFiecx8Y2rlPZFTPFxcghvpUES4SAbv7MGyCr6GjdotKzkt3EgPXZWR1VgoRxVW5cjWDhz2yNcgC1gtTEOfeYf3+rPkWBx3R4JqID+yPbKE9dJDP+cU2p0o8eCaju2aEetpWn7PYM8mImPcdfi1I804CmRirab1h4U8UqoJT/Hw+YSMZmxVtYmUDwuE76rqogwopCRaIO7XZ7L4XSIO1v12DrVdDofDcTR+A2o0d/+2Cwl/AAAAAElFTkSuQmCC" alt="secureImg">
          </div>
          <h4 class="my-2 text-start ">Managed Security Service</h4>
          <p class="text-start">Support monitoring and responding to cyber security incidents 24/7 for organizations and enterprises</p>
        </a>
        <a class="scale hover" href="/services/threat-hunting">
          <div class="lazyload-wrapper ">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEGklEQVR4Ae2ai1HbQBCG18a8hsdABREdhAoiOnAqwKkAqACrguAKEB1ABTgVhFSAOsDhPbyc/3ekjCPku5N0J2zwN+OxkE9Iv2537273RKZMsc7V1ZXPj7xnLi4u1m5vb3fwOb25uenHn/O7u7ttqZCaOIZCFxYWdp6fn3drtdraiGZRvV4P7+/vj9bX1yNxiDPBNFkIbOJwWyE0i/Dh4SFwJdy6YAqdmZnZ7/f7vpQAL6kLqwhWVla6YhErgmm28/Pz9MVmWaEZ0Nzbi4uLR2KBUoIN/dMWVvy8kOAS/mmLwn6eS7At/7RFET/XCnbsn7Yw9nOlYEwMKPLwjcy2CFrhddXVLy8vnydILPGenp42VA2Ugt8jU8G2QQzoumhbFKeCIeBoeXl5C9/fDJoHbIu4EYhDXAqOIKDFA3yHEL2naBssLS21eYCgE+KrJ45wKdjDsHaY/AHRByN6759YjPne3NzcKQ6djQwNcUsLogWCBiaNGVEbC/4Q42SUbjgk1hOHVBGlW8NZjSyxZHZ2lnNzTxxTheDAZMqnMHmruBYcJv5pAk2eCwJxiOthqSM54epHHGIlaNEU2TtigXip92pRg6VpGwuDfSnJh5taWulhJAW+sAdSp7vphXmcfPeLtOM94CJSFiuCmRiAufnD52Dm/OqmmvppszRtZ0MsUZo0IqazKZ4rdM+szHhcXl62YEqHosFm0BqFadBqNBpNpKRORv2u7GHc4EwmDGQzf6t+V/rw4+NjhPmt6BinoIXVlrKTlIKR9+1h8h+JZo47RkEr4jOrGpiMw5Nk1r90DbR56evra5ZRvqvajEvQwu8t3UJF28PwnWOZHH7oGhiVWli1V1Ud4pLHq5shgBzofCoNKx0YWnbT5+Og5SsuPcPKbFM0GM20KCYdlIbJClokjvBtyQETAXiB+xn3UF6H+x+IAUY9zLeOhz+X/LmmHsbFTdMqX5k0DwRvjMqm/NdODKBZ4g2fSH74ok4pRNewZE4rNBFLjJeH8KG2FGMgRLVbByNBq0wCD71rnDTIVR/Gg4XwrzLbjCJcf4aYMBgvEZw+4bhZsmAXJllRE3IJRi95GHN/isO8cR7gZj1Y3qapOZNcGQ/+Y9zEeWbRFFhGJ4/YwTVSAN24XBERTHkj70WFclp4s/SZt0wOsNK/JQUoJJhmhGBjHCgcsJfXlBMKZy1XV1ePq6gUZMDiW+H5femdeLbyxYYEeSoZWVjZeliR6NJiibXNpS5Fs5jOYptYwOpuWuaiIJpZTk8swIkFPl9t7qi1Wmrhg3G44N4OKQk3uHAWNZbbh7PggiBe13qSD6vbhdM4E5xgKjw23w591WXFw7ngBAqXv9uN/eHzNF2M5x2abhWlncoEJ3DFhVmaz3w0RB5PYv1qyjjzB0KsH54ZqtBVAAAAAElFTkSuQmCC" alt="secureImg">
          </div>
          <h4 class="my-2 text-start ">Threat Hunting</h4>
          <p class="text-start">Ensure that the enterprise system is secured and prevented from all cyber attacks. Threat hunting can search, detect and remove malicious software as well as network security threats latent in the corporate network</p>
        </a>
        <a class="scale hover" href="/services/pentest-and-audit">
          <div class="lazyload-wrapper ">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAADpUlEQVR4Ae2ai3XaMBSGbwh5P2omqDNByQZhgp5O0GQCkgkCExQmKJmg6QShE6QbVJ0Aeni/+19qUlWxeEoCU3/ncLAtG/tD0rVeRDExW8UOOaRSqXiHh4dev9/3xzff2amenp5+J4dYFw4ks6PR6Io/YedAvIxPqd1uf0ulUoIsYk14IjoYDG4h4817XSKRyEG8CPEqWcCKMGT9/f39J2z6tByi2+1mbOS2cWHIpvf29p40uSrwKQ+Hw5+8g9x8h2Lu49x0yLlVpGVM13GjwpyzkH0OkS1B8uHs7Kwcdl2r1fJR9HO47qOSVEVOX5rMaaPCjUbjB0nFGDnEufRBJ6pSr9evIf0Jm/IfJgJpI3U6QYaA7D0psru7u5fzyjIoviUU80tsynIcD27JEMaEwbW8A9nbo6MjQQvC16B43yiHsxz1yQBGhLko0r8RuYQHf6AlOT8/f+R3s3TIQ2y4JgMYEcbDvZf3OUDRiiCX88o9rsgARoIW6m+F/gaa6snJSYoMYON3V87hoG691C/khMn3Zlna9kzU45WFuTMg7yM6CzIEfuvXtHstg8koHQmSs07gVtCkOxdGr9fz8Qp62edWVq1WuyIzvJV3uCmK3/Z1J+M5xaxWmTZocTPx4ODgs65Lt6ngD3/sdDp3OnGtsNpMjBL8Dj8+Ps6EpYXW4aBI+hRRuFTqqlVCc4FPEUfn8N9F6Vh424mFt51YeN3gdXKHJuQFf5MFNk04j3GtAg/z8Lcy6mGEjRFGjhbRwc+RZTZFWKiyzWYza6PjsgnCAnU2wzOJkwPcU8O4WI4ssHZhiN3Iw7mTealFJuAWYd3CeXWgnvvgZLGnZk2YZx5mpL8KUjx7YXvAwYowiinP+qXw8Oq0yYTQIIWvHFnGhvDXSTHlqc6QaROnQUrFuDBE3sj7PG0it5pcBykV48JcBzHSeS8f41YTRIu0hiClMnOYdhm4eEJayBNqEH015ekiSKlYi9KQLmBWMa1LdxWkVGy+hz3Uyy9cR9UEl0FKxXbDYxyQ5Ekw10FKxUodVhgLoniPX08QdRqkVFwIM2mIPtMGEA/xbDuhwmj6OV3hagNUIRF6XHeBsr4ianDn5CIsQVukg6ZgVCnrErTCmE0v0J/FoFGDe2N5XeLUZUu83AE5vcoyYKcEgw5TV+BOjdLcjeO+K0UjpwXNkGXmXpgWLC/MatY2rxPBK/+CgfuZK24XXomHYuNN6wW5JJlMimUWsMbEbBG/AV8srQhag8N3AAAAAElFTkSuQmCC" alt="secureImg">
          </div>
          <h4 class="my-2 text-start ">Pentest and Audit</h4>
          <p class="text-start">Implement penetration testing and audit for the entire network system and applications comprehensively. The service is executed from all phases of design, implementation, testing and operation of the organization system. The used methods are chosen by the clients.</p>
        </a> 
        <a class="scale hover" href="/services/application-security">
          <div class="lazyload-wrapper ">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAACCklEQVR4Ae2b223CMBSG/4QA4iaRDegGHSGb0A0qJiDZgBHoJjBBR4ANUglxESjQc6QiIZSUOvhWy99LHqJI+eKT2P7tAB63CfAEeZ4P2+32uCiKGBqIomh1OByWcRyvUZPawrvd7v1yucxggDAM006nk6EGtYS32+2UDikMEgTBpNvtCj9wYWEq41Gr1VrBAo7HI1V3/CVyTQhBms1mAkuge3mDIMLC9N6OYAl0L0MIIiz83/HCruOFXccLu04ECZzP52wwGKRQyGazSWkMPcWT+JJ2HS/sOl7YNDTffoVCrBLmJIXChc/9fj+GIqwRvo2NqF+fq5K2QrgsI1MlbVz4t0CQpF8gGaPCD9LPrNfrpZCMUmEWorKcVp2DZllGyuShjKsQlSVIGrfBuSlZRkkL3wuRdHptaZOyjPQWpmlcghIhlqblmYSi1aTiUuWyjPQWpnnxgufHZedMyzJKSprDgCrpErTJMsq+0n+U1irLKO2WHkhrl2WUDzwqpI3IMlpGWnfSxmQZZQOPe1iauqwFf8VhEK1jadOyjI94XMcLu44Xdh0p/TCv6v3Mc63Hl7TreGHX8cKu44UfEQSB0P5klfAvARBEWPh0Os1hD0sIIizMO9ApX57APBkt36whSK13uN/vzwRyZ+nwA6+biz31Gw+tF42Kokh07ZJvNBo5teqHTd8Rj218A2oD4zv1pY1RAAAAAElFTkSuQmCC" alt="secureImg">
          </div>
          <h4 class="my-2 text-start ">Application Security</h4>
          <p class="text-start">Application Security service aims to complete the software development cycle of an organization in terms of models, tools, implementation methods and awareness of information security of programmers.</p>
        </a>
      </div>
    </main>
  </div>
</template>

<script>
export default {
 name: 'Services'
}
</script>

<style scoped>
.img-services{
  margin-left:146px;
}
.main-services{
  display:flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
    margin-right: auto;
    margin-top: 4rem;
    margin-bottom: 4rem;
}
.services{
  display: grid;
    grid-template-columns: repeat(1,1fr);
    gap: 40px;
}
.scale{
  background: linear-gradient(180deg,rgba(255,255,255,.2) 0%,rgba(255,255,255,0) 100%),linear-gradient(180deg,rgba(255,255,255,.3) 0%,rgba(255,255,255,.1) 100%);
    cursor: pointer;
    height: 250px;
    margin-right:146px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    text-decoration: none;
}
.hover:hover>h4{
  color:#003249;
 
} 
 .text-start:hover{
  color:#003249;
} 

.lazyload-wrapper{
  text-align: start;
}
.text-start{
  line-height:24px;
  font-size: 20px;
  text-align: start;
  margin-top: .5rem;
    margin-bottom: .5rem;
    color:#fff;
}
</style>