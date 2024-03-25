import bannerImage from "../assets/home-banner.png";
import styles from "./CronogramaPage.module.scss";
import unimet from "../assets/uni.jpg";
import adolescentesImage from "../assets/adolescentesImage.jpeg";
import contextoImage from "../assets/contextoImage.jpeg";
import impacto from "../assets/impacto.webp"
import necesidades from "../assets/necesidades.jpg"
import recursos from "../assets/recursos.webp"
import situacion from "../assets/situacion.jpeg"
import empleo from "../assets/empleo.jpg"
import Divider from "../components/Divider";
import { Helmet } from "react-helmet-async";


export default function CronogramaPage() {
  

  return (
    <>
      <Helmet title="Obras"></Helmet>
      <header
        className={styles.banner}
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className={styles.contentTitle}>
          <h1>
          Contexto y Comunidades del Proyecto
          </h1>
          <div className={styles.description}>
          En esta sección se pueden visualizar la situación o problema que motiva el proyecto.
             Identificar quiénes serán los beneficiarios directos del proyecto, junto con sus necesidades e impactos.  
             Al igual que las organizaciones que colaboraran en el proyecto
          </div>
        </div>
      </header>
      <section>
        <Divider>
          <h2>Contexto y Justificación</h2>
        </Divider>
        <div className={styles.aboutUs} style={{paddingTop:"0px"}}>
          <div className={styles.content} >
            <p className={styles.paragraph}>
            <i>La programación es fundamental en el mundo moderno debido a su capacidad para resolver problemas, 
            automatizar tareas, crear sistemas y aplicaciones que facilitan la vida cotidiana. 
            Asimismo, permite traducir ideas innovadoras en soluciones tecnológicas concretas, abriendo el camino 
            para avances en campos tan diversos como la medicina, la educación, la industria y el entretenimiento. </i>
            (Sulbarán, I) (2024) 

            </p>
          </div>
          <div className={styles.group}>
            <div className={styles.image}>
              <img src={situacion} alt="" />
            </div>
            <div className={styles.content}>
              <h3 className={styles.paragraph}>Situacion</h3>
              <p className={styles.paragraph}>
                En las comunidades de Venezuela, la falta de acceso a servicios básicos como lo es la educacion de calidad, la alta tasa de desempleo y la creciente vulnerabilidad estan presentes en el dia a dia (Vergara, 2022  ).
                Esto hace que la capacitación en habilidades demandadas, como la programación en Python, sea crucial.
              </p>
              <p className={styles.paragraph}>
                <i>Esto hace que la capacitación en habilidades demandadas, como la programación en Python, sea crucial.</i>
              </p>
            </div>
          </div>
          <div className={styles.group}>
            <div className={styles.image}>
              <img src={contextoImage} alt="" />
            </div>
            <div className={styles.content}>
              <h3 className={styles.paragraph}>Relevancia</h3>
              <p className={styles.paragraph}>
              La programación en Python es relevante porque es un lenguaje de programación con amplias oportunidades de empleo, salarios competitivos y es relativamente fácil de aprender
              </p>
              <p className={styles.paragraph}>
              Además, Python se utiliza en múltiples sectores, lo que significa que aprender este lenguaje puede abrir muchas puertas en el ámbito laboral y ayudar a las personas a mejorar su calidad de vida.
              </p>
            </div>
          </div>
          <div className={styles.group}>
            <div className={styles.image}>
              <img src={empleo} alt="" />
            </div>
            <div className={styles.content}>
              <h3 className={styles.paragraph}>Beneficio</h3>
              <p className={styles.paragraph}>
              Con este proyecto, no solo les estás brindando una habilidad técnica valiosa, sino también la posibilidad de acceder a un mercado laboral global, mejorar su empleabilidad y, en última instancia, contribuir al crecimiento y desarrollo de sus comunidades. 
              </p>
              <p className={styles.paragraph}>
              Este tipo de educación puede empoderar a las personas para que sean autosuficientes y generen un impacto positivo en su entorno (ACNUR, 2023).
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Divider>
          <h2>Recursos Necesarios</h2>
        </Divider>
        <div className={styles.aboutUs}>
          <div className={styles.group}>
            <div className={styles.image}>
              <img src={recursos} alt="" />
            </div>
            <div className={styles.content}>
              <h3 className={styles.paragraph}>Recursos</h3>
              <p className={styles.paragraph}>
              - Infraestructura
              </p>
              <p className={styles.paragraph}>
              - Computadoras y Acceso a Internet
              </p>
              <p className={styles.paragraph}>
              - Personas capacitadas en programación, específico el lenguaje Python 
              </p>
              <p className={styles.paragraph}>
              - Personas capacitadas para la preparación de entrevistas y la orientación profesional 
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Divider>
          <h2>Necesidades Comunidades</h2>
        </Divider>
        <div className={styles.aboutUs}>
        <div className={styles.group}>
            <div className={styles.image}>
              <img src={necesidades} alt="" />
            </div>
            <div className={styles.content}>
              <h3 className={styles.paragraph}>Necesidades</h3>
              <p className={styles.paragraph}>
              La población que se verá directamente beneficiada tiene diversas necesidades que se pueden cubrir gracias a este proyecto.
              </p>
            </div>
          </div>
          <div className={styles.Three}>
              <p className={styles.paragraph}>
              Entre dichas necesidades tenemos el <b>acceso a una educacion de calidad</b>, con <b>recursos tecnologicos</b> que no impongan un obstaculo en el aprendizaje.
              </p>
              <p className={styles.paragraph}>
              Al igual que <b>oportunidades de empleo</b> y conexiones, junto con las habilidades relevantes buscadas en el mercado laboral
              </p>
              <p className={styles.paragraph}>
              Y por ultimo el <b>apoyo y mentoría</b> para motivar y guiar a los estudiantes en su camino de aprendizaje
              </p>
          </div>
          </div>
        </section>
      <section>
        <Divider>
          <h2>Comunidad y Aliados</h2>
        </Divider>
        <div className={styles.aboutUs}>
          <div className={styles.group}>
            <div className={styles.image}>
              <img src={unimet} alt="" />
            </div>
            <div className={styles.content}>
              <h3 className={styles.paragraph}>Aliados y Colaboradores</h3>
              <p className={styles.paragraph}>
              La Organización que colabora directamente con el proyecto establecido es la <b>Universidad Metropolitana</b>, 
              puesto que desempeña un papel crucial al brindarnos los recursos necesarios para este proyecto, 
              siendo esto el recurso humano dado por sus profesores y estudiantes; los recursos de infraestructura y 
              materiales al ofrecer acceso a sus instalaciones y recursos tecnológicos; y su red de contactos que 
              facilita las oportunidades de networking con la comunidad 
              </p>
            </div>
          </div>
          <div className={styles.group}>
            <div className={styles.image}>
              <img src={adolescentesImage} alt="" />
            </div>
            <div className={styles.content}>
              <h3 className={styles.paragraph}>Población Beneficiaria</h3>
              <p className={styles.paragraph}>
              La población que se verá directamente beneficiada con la creación de este proyecto, son adolescentes y 
              adultos entre 15-25 años de comunidades vulnerables que se les dará la posibilidad de poder ampliar sus 
              conocimientos y tener un camino profesional en dicha área

              </p>
            </div>
          </div>
          <div className={styles.group}>
            <div className={styles.image}>
              <img src={impacto} alt="" />
            </div>
            <div className={styles.content}>
              <h3 className={styles.paragraph}>Impactos</h3>
              <p className={styles.paragraph}>
              Los impactos de un proyecto de este estilo pueden ser profundos y variados:
              </p>
              <p className={styles.paragraph}>
              Entre dichos impactos en relacion con sus necesidades tenemos la mejora de habilidades técnicas demandadas que aumenten su empleabilidad.
              Lo cual propicia el desarrollo economico y la innovacion social, junto con el empoderamiento personal
              </p>
            </div>
          </div>
        </div>
        </section>
        
    </>
  );
}