import axios from 'axios';
import { React, useState, useEffect } from 'react'
import './Blogs.css';
import { BlogBox, Username, BlogDate, BlogTitle, BlogText } from './BlogsElement.js'
function Blogs() {
      useEffect(() => {
            axios.get("/secret")
                  .then((res) => {
                        console.log(res);
                  })
      }, [])
      return (
            <div id='blogsFrame'>
                  <BlogBox id="blogBox">
                        <div className='userBlogs'>
                              <div id="userBlogs2">
                                    <div id="userBlogsName">
                                          <Username>Ankit Jangra</Username>
                                          <BlogDate>May 12, 2016</BlogDate>
                                    </div>
                              </div>
                              <div id="blogTitle">
                                    <BlogTitle>
                                          Lorem Ipsum got  the power of computer networks  in our hands through the best book of 2021.
                                    </BlogTitle>
                              </div>
                              <div id="blogText">
                                    <BlogText>
                                          em, pharetra at diam eget, dapibus posuere velit. Morbi sollicitudin sed justo lacinia vehicula. Aliquam a nisi vel nisi interdum ornare et ac augue. Nulla non rhoncus mi. Sed eget nisi magna. Praesent eget enim viverra, tincidunt turpis vitae, vestibulum nisi. Vivamus varius velit tellus, eget egestas lectus dapibus vel. Donec varius hendrerit lacus sed hendrerit. Duis sit amet lorem semper, volutpat odio et, iaculis odio. Vestibulum in urna iaculis dui dictum viverra. Nullam ac arcu at odio pretium rutrum porttitor nec turpis. Nam mauris augue, volutpat vitae quam tempus, ornare ultrices odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo iaculis purus, sed posuere elit.

                                    </BlogText>
                              </div>
                        </div>
                  </BlogBox>
                  <BlogBox id="blogBox">
                        <div className='userBlogs'>
                              <div id="userBlogs2">
                                    <div id="userBlogsName">
                                          <Username>Ankit Jangra</Username>
                                          <BlogDate>May 12, 2016</BlogDate>
                                    </div>
                              </div>
                              <div id="blogTitle">
                                    <BlogTitle>
                                          Lorem Ipsum got  the power of computer networks  in our hands through the best book of 2021.
                                    </BlogTitle>
                              </div>
                              <div id="blogText">
                                    <BlogText>
                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum dui eget diam aliquam bibendum a non arcu. Sed sagittis libero tortor, eget cursus ipsum tincidunt et. Morbi in scelerisque odio. Nullam auctor dolor nibh, nec aliquam augue aliquet quis. Nulla ultricies eget nibh quis rutrum. Nam blandit justo nunc, vel semper eros feugiat ac. In at iaculis magna. Nullam sem tortor, ornare a lobortis vitae, sagittis nec felis. Mauris viverra nunc metus, vitae pretium elit molestie in. Sed ex est, ultrices sit amet lobortis non, tincidunt eget justo. In volutpat diam auctor ligula fringilla finibus. Proin porttitor lobortis commodo. Sed semper dapibus nibh, nec ultrices urna sagittis at. Nam rhoncus tincidunt massa, ac varius ligula hendrerit id. Cras risus tortor, congue ornare lorem sit amet, eleifend pretium purus. Duis hendrerit iaculis scelerisque.

                                          Integer fermentum lacus quis tortor rutrum, sit amet ornare lectus suscipit. Aenean vitae nisi lacinia, vestibulum nibh in, bibendum mi. Donec nibh neque, rutrum id hendrerit et, eleifend ultricies turpis. Donec id justo ligula. Duis at est quis lectus tincidunt gravida vulputate ac dolor. Donec nec nisl non lacus rutrum feugiat eu nec erat. Aliquam convallis lorem vitae pellentesque sagittis. Vestibulum quis pretium lorem. Sed interdum ipsum id magna feugiat, eget elementum ex accumsan. Quisque ullamcorper magna eu nisi ultricies vehicula. Aliquam vel pretium magna, sit amet lacinia tellus.

                                          Donec ullamcorper vel ligula in viverra. Donec sed ornare mi, id dictum diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin facilisis, urna vel mollis sollicitudin, lectus ante maximus tortor, non porttitor augue dolor at justo. Sed quis sapien eleifend, condimentum mi bibendum, dapibus eros. Ut feugiat mi non gravida placerat. Fusce hendrerit felis mi, vel maximus tellus vestibulum et. Integer quis est vel dui interdum congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam nec lorem gravida, viverra purus a, luctus nisi. Nulla facilisi. Donec eleifend eu metus eu feugiat. Suspendisse eros urna, pharetra at laoreet eu, convallis sit amet leo.

                                          Aenean orci sem, pharetra at diam eget, dapibus posuere velit. Morbi sollicitudin sed justo lacinia vehicula. Aliquam a nisi vel nisi interdum ornare et ac augue. Nulla non rhoncus mi. Sed eget nisi magna. Praesent eget enim viverra, tincidunt turpis vitae, vestibulum nisi. Vivamus varius velit tellus, eget egestas lectus dapibus vel. Donec varius hendrerit lacus sed hendrerit. Duis sit amet lorem semper, volutpat odio et, iaculis odio. Vestibulum in urna iaculis dui dictum viverra. Nullam ac arcu at odio pretium rutrum porttitor nec turpis. Nam mauris augue, volutpat vitae quam tempus, ornare ultrices odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo iaculis purus, sed posuere elit.

                                          In in purus dolor. Quisque elit lacus, varius vitae auctor eget, interdum ac libero. Ut dolor odio, cursus at nibh vel, semper convallis sapien. Mauris sapien tortor, tincidunt vel euismod non, elementum a libero. Nunc magna risus, convallis vitae varius at, laoreet laoreet elit. Nulla sed varius neque. Duis et urna aliquam orci viverra fermentum. In eu dictum justo, non vestibulum nibh. Morbi ac sodales velit. Pellentesque et felis faucibus, faucibus lacus non, cursus ligula. Nam ut sem iaculis, pellentesque orci quis, auctor ligula.
                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum dui eget diam aliquam bibendum a non arcu. Sed sagittis libero tortor, eget cursus ipsum tincidunt et. Morbi in scelerisque odio. Nullam auctor dolor nibh, nec aliquam augue aliquet quis. Nulla ultricies eget nibh quis rutrum. Nam blandit justo nunc, vel semper eros feugiat ac. In at iaculis magna. Nullam sem tortor, ornare a lobortis vitae, sagittis nec felis. Mauris viverra nunc metus, vitae pretium elit molestie in. Sed ex est, ultrices sit amet lobortis non, tincidunt eget justo. In volutpat diam auctor ligula fringilla finibus. Proin porttitor lobortis commodo. Sed semper dapibus nibh, nec ultrices urna sagittis at. Nam rhoncus tincidunt massa, ac varius ligula hendrerit id. Cras risus tortor, congue ornare lorem sit amet, eleifend pretium purus. Duis hendrerit iaculis scelerisque.

                                          Integer fermentum lacus quis tortor rutrum, sit amet ornare lectus suscipit. Aenean vitae nisi lacinia, vestibulum nibh in, bibendum mi. Donec nibh neque, rutrum id hendrerit et, eleifend ultricies turpis. Donec id justo ligula. Duis at est quis lectus tincidunt gravida vulputate ac dolor. Donec nec nisl non lacus rutrum feugiat eu nec erat. Aliquam convallis lorem vitae pellentesque sagittis. Vestibulum quis pretium lorem. Sed interdum ipsum id magna feugiat, eget elementum ex accumsan. Quisque ullamcorper magna eu nisi ultricies vehicula. Aliquam vel pretium magna, sit amet lacinia tellus.

                                          Donec ullamcorper vel ligula in viverra. Donec sed ornare mi, id dictum diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin facilisis, urna vel mollis sollicitudin, lectus ante maximus tortor, non porttitor augue dolor at justo. Sed quis sapien eleifend, condimentum mi bibendum, dapibus eros. Ut feugiat mi non gravida placerat. Fusce hendrerit felis mi, vel maximus tellus vestibulum et. Integer quis est vel dui interdum congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam nec lorem gravida, viverra purus a, luctus nisi. Nulla facilisi. Donec eleifend eu metus eu feugiat. Suspendisse eros urna, pharetra at laoreet eu, convallis sit amet leo.

                                          Aenean orci sem, pharetra at diam eget, dapibus posuere velit. Morbi sollicitudin sed justo lacinia vehicula. Aliquam a nisi vel nisi interdum ornare et ac augue. Nulla non rhoncus mi. Sed eget nisi magna. Praesent eget enim viverra, tincidunt turpis vitae, vestibulum nisi. Vivamus varius velit tellus, eget egestas lectus dapibus vel. Donec varius hendrerit lacus sed hendrerit. Duis sit amet lorem semper, volutpat odio et, iaculis odio. Vestibulum in urna iaculis dui dictum viverra. Nullam ac arcu at odio pretium rutrum porttitor nec turpis. Nam mauris augue, volutpat vitae quam tempus, ornare ultrices odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo iaculis purus, sed posuere elit.
                                          In in purus dolor. Quisque elit lacus, varius vitae auctor eget, interdum ac libero. Ut dolor odio, cursus at nibh vel, semper convallis sapien. Mauris sapien tortor, tincidunt vel euismod non, elementum a libero. Nunc magna risus, convallis vitae varius at, laoreet laoreet elit. Nulla sed varius neque. Duis et urna aliquam orci viverra fermentum. In eu dictum justo, non vestibulum nibh. Morbi ac sodales velit. Pellentesque et felis faucibus, faucibus lacus non, cursus ligula. Nam ut sem iaculis, pellentesque orci quis, auctor ligula.
                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum dui eget diam aliquam bibendum a non arcu. Sed sagittis libero tortor, eget cursus ipsum tincidunt et. Morbi in scelerisque odio. Nullam auctor dolor nibh, nec aliquam augue aliquet quis. Nulla ultricies eget nibh quis rutrum. Nam blandit justo nunc, vel semper eros feugiat ac. In at iaculis magna. Nullam sem tortor, ornare a lobortis vitae, sagittis nec felis. Mauris viverra nunc metus, vitae pretium elit molestie in. Sed ex est, ultrices sit amet lobortis non, tincidunt eget justo. In volutpat diam auctor ligula fringilla finibus. Proin porttitor lobortis commodo. Sed semper dapibus nibh, nec ultrices urna sagittis at. Nam rhoncus tincidunt massa, ac varius ligula hendrerit id. Cras risus tortor, congue ornare lorem sit amet, eleifend pretium purus. Duis hendrerit iaculis scelerisque.

                                          Integer fermentum lacus quis tortor rutrum, sit amet ornare lectus suscipit. Aenean vitae nisi lacinia, vestibulum nibh in, bibendum mi. Donec nibh neque, rutrum id hendrerit et, eleifend ultricies turpis. Donec id justo ligula. Duis at est quis lectus tincidunt gravida vulputate ac dolor. Donec nec nisl non lacus rutrum feugiat eu nec erat. Aliquam convallis lorem vitae pellentesque sagittis. Vestibulum quis pretium lorem. Sed interdum ipsum id magna feugiat, eget elementum ex accumsan. Quisque ullamcorper magna eu nisi ultricies vehicula. Aliquam vel pretium magna, sit amet lacinia tellus.

                                          Donec ullamcorper vel ligula in viverra. Donec sed ornare mi, id dictum diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin facilisis, urna vel mollis sollicitudin, lectus ante maximus tortor, non porttitor augue dolor at justo. Sed quis sapien eleifend, condimentum mi bibendum, dapibus eros. Ut feugiat mi non gravida placerat. Fusce hendrerit felis mi, vel maximus tellus vestibulum et. Integer quis est vel dui interdum congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam nec lorem gravida, viverra purus a, luctus nisi. Nulla facilisi. Donec eleifend eu metus eu feugiat. Suspendisse eros urna, pharetra at laoreet eu, convallis sit amet leo.

                                          Aenean orci sem, pharetra at diam eget, dapibus posuere velit. Morbi sollicitudin sed justo lacinia vehicula. Aliquam a nisi vel nisi interdum ornare et ac augue. Nulla non rhoncus mi. Sed eget nisi magna. Praesent eget enim viverra, tincidunt turpis vitae, vestibulum nisi. Vivamus varius velit tellus, eget egestas lectus dapibus vel. Donec varius hendrerit lacus sed hendrerit. Duis sit amet lorem semper, volutpat odio et, iaculis odio. Vestibulum in urna iaculis dui dictum viverra. Nullam ac arcu at odio pretium rutrum porttitor nec turpis. Nam mauris augue, volutpat vitae quam tempus, ornare ultrices odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo iaculis purus, sed posuere elit.

                                    </BlogText>
                              </div>
                        </div>
                  </BlogBox>
                  <BlogBox id="blogBox">
                        <div className='userBlogs'>
                              <div id="userBlogs2">
                                    <div id="userBlogsName">
                                          <Username>Ankit Jangra</Username>
                                          <BlogDate>May 12, 2016</BlogDate>
                                    </div>
                              </div>
                              <div id="blogTitle">
                                    <BlogTitle>
                                          Lorem Ipsum got  the power of computer networks  in our hands through the best book of 2021.
                                    </BlogTitle>
                              </div>
                              <div id="blogText">
                                    <BlogText>
                                          em, pharetra at diam eget, dapibus posuere velit. Morbi sollicitudin sed justo lacinia vehicula. Aliquam a nisi vel nisi interdum ornare et ac augue. Nulla non rhoncus mi. Sed eget nisi magna. Praesent eget enim viverra, tincidunt turpis vitae, vestibulum nisi. Vivamus varius velit tellus, eget egestas lectus dapibus vel. Donec varius hendrerit lacus sed hendrerit. Duis sit amet lorem semper, volutpat odio et, iaculis odio. Vestibulum in urna iaculis dui dictum viverra. Nullam ac arcu at odio pretium rutrum porttitor nec turpis. Nam mauris augue, volutpat vitae quam tempus, ornare ultrices odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo iaculis purus, sed posuere elit.

                                    </BlogText>
                              </div>
                        </div>
                  </BlogBox>
            </div>
      )
}

export default Blogs
