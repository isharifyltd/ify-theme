import React, { useState, useEffect } from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import CrossIcon from "../icons/cross-icon";

const IfyDrawer = () => {
  const [drawer_open, setDrawerOpen] = useState(false);

  return (
    <>
      <button className="Ify-btn Ify-btn-primary" onClick={() => setDrawerOpen(true)}>
        Click to Open Drawer
      </button>
      <SwipeableDrawer
        classes={{
          paper: "Ify-drawer-808",
        }}
        anchor={"right"}
        onOpen={() => {}}
        open={drawer_open}
        onClose={() => {
          setDrawerOpen(false);
        }}
      >
        <div className="Ify-drawer">
          <div className="Ify-drawer-head">
            <div className="Ify-drawer-title">Drawer Title</div>
            <button
              onClick={() => {
                setDrawerOpen(false);
              }}
              className="Ify-drawer-close"
            >
              <CrossIcon />
            </button>
          </div>

          <div className="Ify-drawer-body-wrapper">
            <div className="Ify-drawer-body Ify-scrollbar-show-hide">
              <p>Drawer body</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquid unde consequuntur fuga amet
                voluptatem aspernatur explicabo atque velit totam ea dolores, dolorem ut dicta neque animi
                exercitationem distinctio optio?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vitae fugit impedit commodi dolorem
                tempora, placeat soluta reiciendis quae asperiores ducimus minus dicta quam cumque quisquam, deleniti
                culpa voluptate accusamus, tempore in voluptatem voluptatum sint. Doloremque natus necessitatibus eius?
                Totam repudiandae corporis nulla id distinctio quasi nihil optio, tempore tempora corrupti et vitae?
                Repudiandae, quae? Beatae aut atque optio, earum at rerum totam laudantium ut architecto possimus
                voluptas, repellat vero accusantium quae iure voluptatibus. Eos fuga placeat exercitationem neque.
                Veniam quasi facere cumque eligendi deserunt nulla eum aliquid natus odit nemo, aliquam dicta excepturi
                libero vitae debitis nihil! Eius, adipisci? Aliquam incidunt praesentium vero nostrum? Tenetur velit,
                rerum mollitia officiis distinctio facere similique? Quo, ullam ratione a alias neque nam nulla qui
                laboriosam animi corrupti maiores est. Cumque quaerat itaque sunt repellat laudantium sint minima
                aperiam. Esse commodi, perspiciatis, maxime voluptas voluptatem odio impedit corporis consequuntur
                nesciunt animi quibusdam, reprehenderit unde obcaecati nulla sapiente ut maiores asperiores? A, vero
                quaerat. Repellat quia earum doloribus incidunt ratione vitae sunt vero eius. Repellat, vero. Suscipit,
                labore. Nobis veniam voluptatum illum nihil tempora perspiciatis deserunt odit vitae dolorem repudiandae
                alias, minima reiciendis repellat similique saepe quasi veritatis totam? Maxime, placeat possimus
                suscipit quo, sequi at dignissimos vero ullam deserunt nam ad nisi labore totam cum quaerat? Ab hic non
                sint sequi. Est eveniet consectetur voluptate error non cum veniam debitis repellendus reiciendis aut
                maiores facilis omnis a, eaque asperiores suscipit reprehenderit dolore in. Eius iusto vel officia
                reprehenderit consectetur expedita veritatis totam, laboriosam hic nam ut voluptates maiores esse
                adipisci asperiores architecto nulla atque temporibus doloremque deleniti sint unde error! Distinctio
                delectus qui in doloribus aliquam esse natus commodi laudantium, a impedit neque voluptate ipsam nulla
                facere quia asperiores obcaecati corrupti libero quam? Assumenda ad dolor quibusdam amet sapiente dicta
                aspernatur. Autem dolorum laborum, eaque vitae, sunt nobis ex maiores vel accusamus nihil hic harum
                iusto qui exercitationem aperiam delectus quo asperiores corrupti? Quam deleniti maxime sint dolor alias
                dignissimos obcaecati, maiores saepe nihil nemo iste exercitationem quae consectetur incidunt error
                voluptatem facere voluptatibus. Non aspernatur vero pariatur, aliquam unde asperiores nihil consequuntur
                expedita velit quam tenetur, soluta dolorum quae veniam distinctio aperiam nulla tempora suscipit
                sapiente molestiae adipisci odit reiciendis. Eaque veniam architecto nam doloribus ipsa dignissimos sed
                non maxime debitis cumque aut, odit ut suscipit facilis corrupti repellendus molestiae nesciunt enim ab
                ratione dolorum. Incidunt maiores voluptates vitae, dolore velit veritatis, dignissimos voluptas harum
                illum officia nobis, ea dolor voluptate aperiam iusto neque amet cumque repudiandae hic. Sint velit
                excepturi provident similique, corporis placeat ut. Facilis deserunt suscipit similique aut et cum? Quae
                atque laborum maxime totam qui dignissimos! Consequatur dignissimos ratione aperiam accusamus dicta,
                voluptate ex tempore ducimus, fuga quae numquam aliquid tenetur sit earum pariatur molestias
                necessitatibus rem. Totam enim in qui fugit dolor ea est at odit, ullam doloremque dignissimos sapiente
                culpa aut consectetur magnam incidunt alias inventore provident suscipit maxime numquam pariatur
                cupiditate sunt. Consequuntur minima fugiat facilis voluptatum blanditiis voluptate non obcaecati id sit
                tenetur, magnam, magni provident incidunt quos ut. Vel nulla consequatur non, autem quaerat iusto
                nesciunt! Illo laboriosam dignissimos placeat accusantium autem, ipsum quaerat minus corrupti non nulla
                excepturi doloremque officiis, debitis voluptate tempore ad tempora. Enim nulla expedita minus laborum
                sequi mollitia corporis, esse, magnam atque similique in quisquam vel voluptatum aspernatur ut corrupti
                deserunt totam quibusdam porro sunt! Quae dolorem, expedita ullam aperiam pariatur nostrum incidunt ab
                saepe eligendi culpa vel molestiae voluptates sed voluptas aut corrupti officiis nihil ipsum fugiat
                obcaecati, debitis qui corporis. Ducimus ut laboriosam ab omnis nam vel impedit saepe inventore
                reprehenderit facilis! Officiis, enim officia voluptatem, consectetur dolor similique blanditiis culpa
                cumque in totam quo modi eaque qui pariatur sapiente illum omnis hic est aspernatur? Dolorem aspernatur
                nam unde voluptate eum labore! Quidem quisquam, repellat iure quia in dolorum earum reiciendis
                praesentium eaque! Perferendis beatae ut eius non eaque voluptates quod ab odio asperiores soluta unde
                placeat laborum quas architecto repellat maiores saepe suscipit voluptatem, quia voluptas ipsa
                consequuntur amet cupiditate. Saepe qui in dignissimos, minus atque, eligendi perferendis sequi error
                inventore ducimus at maiores dolorum! Ut excepturi ea eligendi impedit atque, unde repellat illo iste
                similique delectus placeat quos corporis! Vel veritatis obcaecati doloribus amet iure, provident unde
                dolor quod consequatur, enim ea quam molestiae vero ex earum facilis impedit quia deserunt eius placeat
                perspiciatis nam repudiandae! Quam corrupti fugit totam eveniet quos facere repellendus asperiores
                officia, reprehenderit modi eum. Dolorum, sapiente repellat ipsa, aperiam veritatis eveniet, consectetur
                accusamus corporis voluptatem commodi nulla aliquid ea expedita ab dignissimos dolores quas? Distinctio
                inventore sequi magni aliquam, cumque nulla in quibusdam ex obcaecati magnam doloremque eveniet aut? Qui
                modi quae provident hic, vitae non alias nulla id fugit totam, omnis minus dolores tempore, at
                voluptates libero. Ab, ullam asperiores! Nihil cumque molestiae accusamus iste numquam quaerat
                recusandae odit blanditiis, aut eum, aperiam quam magni dolorum eaque eius quos dolorem rem nemo
                exercitationem voluptate autem. Quasi ea libero expedita quibusdam distinctio error, neque illo
                consectetur, aspernatur incidunt molestias reiciendis adipisci facilis impedit voluptas. Adipisci ipsa
                consequuntur magni, molestias dicta nisi cumque tempore sint suscipit mollitia recusandae excepturi
                dolore culpa quidem ducimus expedita unde incidunt nihil modi iure ab. Iste eius cumque debitis maiores
                explicabo tempora, et laudantium ipsam maxime odit repudiandae asperiores nam repellendus. Doloribus
                laborum assumenda quam obcaecati perferendis animi eos optio sapiente quae facere odio dolore aperiam
                aut qui, soluta nihil sequi, temporibus id tenetur! Nulla dolore est alias fugiat molestiae quaerat
                praesentium saepe commodi incidunt eius iste repudiandae perspiciatis magnam officia dolores, soluta
                facere, modi eveniet ut quisquam in ipsam excepturi mollitia. Quas dolores inventore assumenda optio
                debitis voluptates. Autem deleniti a quam esse unde voluptatum voluptate, quisquam optio veritatis
                reiciendis aspernatur dolore alias recusandae perferendis. Vero in ab, tenetur nam fugiat labore eum
                aliquam. Culpa rem vitae ipsa velit corporis laudantium iusto, laborum quibusdam itaque atque delectus,
                architecto cumque eligendi. Ducimus quis officia doloremque! Saepe a temporibus numquam aliquid soluta
                quasi reiciendis enim esse. Sint nihil ullam laudantium beatae possimus aliquid. Error, illum illo!
              </p>
              <div className="Ify-btn-group">
                <button className="Ify-btn Ify-btn-primary">Save</button>
                <button className="Ify-btn Ify-btn-cancel" onClick={() => setDrawerOpen(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwipeableDrawer>
    </>
  );
};

export default IfyDrawer;
