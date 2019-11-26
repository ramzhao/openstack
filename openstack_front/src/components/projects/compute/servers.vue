<template>
  <div>
    <el-row type="flex" class="row-bg" justify="end">


      <el-col :span="3">
        <el-button type="primary" size="medium" @click="OpencreateServerDialogVisible()">启动实例</el-button>

        <el-button type="danger" size="medium">删除实例</el-button>

      </el-col>

    </el-row>

    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      stripe="true"
      border="true"
      height="800"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="50">
      </el-table-column>
      <el-table-column
        prop="name"
        label="实例名称"
        width="200">
      </el-table-column>
      <el-table-column
        prop="image_name"
        label="映像名称"
        width="200">
      </el-table-column>
      <el-table-column
        prop="ip_addr"
        label="IP 地址"
        width="200">
      </el-table-column>
      <el-table-column
        prop="flavor_name"
        label="大小"
        width="100">
      </el-table-column>
      <el-table-column
        prop="key_name"
        label="密钥对"
        width="100">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="100">
      </el-table-column>
      <el-table-column
        prop="availability_zone"
        label="可用域"
        width="100">
      </el-table-column>
      <el-table-column
        prop="task_state"
        label="任务"
        width="100">
      </el-table-column>
      <el-table-column
        prop="power_state"
        label="电源状态"
        width="100">
      </el-table-column>
      <el-table-column
        prop="time"
        label="创建时间"
        width="200">
      </el-table-column>

      <el-table-column
        label="Actions"
      >
        <template slot-scope="scope">
          <el-dropdown split-button type="primary" @click="start_server_one(scope.row.id)" size="small">
            启动
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="start_server_one(scope.row.id)"
                                v-loading.fullscreen.lock="fullscreenLoading" divided>启动实例
              </el-dropdown-item>
              <el-dropdown-item @click.native="reboot_server_one(scope.row.id,'HEAD')">硬重启实例</el-dropdown-item>

              <el-dropdown-item @click.native="reboot_server_one(scope.row.id,'SOFT')">软重启实例</el-dropdown-item>
              <el-dropdown-item @click.native="stop_server_one(scope.row.id)">关闭实例</el-dropdown-item>

              <el-dropdown-item @click.native="get_remote_consoles(scope.row.id)"
                                divided>打开VNC控制台
              </el-dropdown-item>
              <el-dropdown-item @click.native="pause_server_one(scope.row.id)"
                                divided>暂停实例
              </el-dropdown-item>
              <el-dropdown-item @click.native="unpause_server_one(scope.row.id)"
                                divided>恢复实例
              </el-dropdown-item>
              <el-dropdown-item @click.native="servers_delete_one(scope.row.id)"
                                v-loading.fullscreen.lock="fullscreenLoading" divided>删除实例
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>

    </el-table>

    <el-dialog :visible.sync="openServerConsoleDialogVisible" >
      <el-link :href="remote_consoles_url" target="_blank">单击在新标签页打开控制台</el-link>
      <iframe :src="remote_consoles_url" width="800px" height="500px"></iframe>

    </el-dialog>


    <!--创建映像弹窗-->
    <el-dialog title="创建实例" :visible.sync="createServerDialogVisible" width="800px" top="10vh">
      <el-tabs tab-position="left" style="height: 450px;" type="border-card">
        <el-tab-pane label="详细信息">
          <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="实例名称">
              <el-input v-model="server_name" style="width: 217px"></el-input>
            </el-form-item>
            <el-form-item label="可用域">
              <el-select v-model="nova" placeholder="请选择可用域">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="映像">
          <el-table
            ref="singleTable"
            :data="imagesTableData"
            tooltip-effect="dark"
            stripe="true"
            border="true"
            style="width: 100%"
            max-height="400px"
            @current-change="handleCurrentChange"
            highlight-current-row
            @selection-change="handleSelectionChange">
            <el-table-column
              prop="name"
              label="映像名称"
              width="200">
            </el-table-column>
            <el-table-column
              prop="size"
              label="大小"
              width="150">
            </el-table-column>
            <el-table-column
              prop="visibility"
              label="公有"
              width="100">
            </el-table-column>
            <el-table-column
              prop="disk_format"
              label="格式"
              width="150">
            </el-table-column>

          </el-table>
        </el-tab-pane>
        <el-tab-pane label="flavor">
          <el-table
            ref="singleTable"
            :data="flavorTableData"
            tooltip-effect="dark"
            stripe="true"
            border="true"
            style="width: 100%"
            max-height="400px"
            @current-change="handleCurrentChange_flavor"
            highlight-current-row
            @selection-change="handleSelectionChange">
            <el-table-column
              prop="name"
              label="名称"
              width="200">
            </el-table-column>
            <el-table-column
              prop="vcpu"
              label="VCPU数"
              width="100">
            </el-table-column>
            <el-table-column
              prop="ram"
              label="RAM"
              width="100">
            </el-table-column>
            <el-table-column
              prop="disk"
              label="磁盘总计"
              width="100">
            </el-table-column>
            <el-table-column
              prop="visibility"
              label="公有"
              width="100">
            </el-table-column>

          </el-table>
        </el-tab-pane>
        <el-tab-pane label="网络">
          <el-table
            ref="singleTable"
            :data="networkTableData"
            tooltip-effect="dark"
            stripe="true"
            border="true"
            style="width: 100%"
            max-height="400px"
            @current-change="handleCurrentChange_network"
            highlight-current-row
            @selection-change="handleSelectionChange">
            <el-table-column
              prop="name"
              label="网络名称"
              width="200">
            </el-table-column>
            <el-table-column
              prop="cidr"
              label="关联子网"
              width="100">
            </el-table-column>
            <el-table-column
              prop="shared"
              label="共享"
              width="100">
            </el-table-column>
            <el-table-column
              prop="status"
              label="状态"
              width="100">
            </el-table-column>
            <el-table-column
              prop="admin_state_up"
              label="管理状态"
              width="100">
            </el-table-column>

          </el-table>
        </el-tab-pane>
        <el-tab-pane label="安全组">
          <el-form>
            <el-form-item label="安全组">
              <el-select v-model="safe_group" placeholder="请选择安全组">
                <el-option
                  key="default"
                  label="default"
                  value="default">
                </el-option>
              </el-select>
            </el-form-item>

          </el-form>


        </el-tab-pane>
        <el-tab-pane label="密钥对">密钥对</el-tab-pane>
      </el-tabs>
      <div style="margin-left: 70%;margin-top: 30px">
        <el-button type="primary" style="" @click="create_server_onsubmit">创建实例</el-button>
        <el-button plain style="">取消</el-button>
      </div>


    </el-dialog>


  </div>

</template>

<script>
  export default {
    name: 'servers',
    components: {},
    data () {
      return {

        imagesTableData: []
        ,
        flavorTableData: [],
        networkTableData: [],
        // 创建映像弹窗变量变量
        currentRow: null,
        currentRow_flavor: null,
        currentRow_network: null,
        options: [{
          value: 'nova',
          label: 'nova'
        }],

        server_name: '',
        nova: 'nova',
        safe_group: 'default',

        fullscreenLoading: false,
        multipleSelection: [],
        createServerDialogVisible: false,
        editImagesDialogVisible: false,
        openServerConsoleDialogVisible: false,
        formLabelWidth: '100px',
        fileList: [],
        create_server_form: {
          name: 'new-server-test',
          imageRef: 'fe3bb837-8c39-4011-903f-809d7b374aa7',
          flavorRef: '1',
          availability_zone: 'nova',
          diskConfig: 'AUTO',
          networks: '405d6294-d47c-42ac-86bd-4b0d9caa5bd0',
          security_groups: 'default'

        },
        edit_image_form: {
          name: '',
          description: '',
          kernel_id: '',
          ramdisk_id: '',
          architecture: '',
          format: '',
          minimum_disk: '',
          minimum_ram: '',
          public: false,
          protected: false

        },
        tableData: [],
        remote_consoles_url: '',

        ImagesData: [{
          'name': 'cirros',
          'status': '活动',
          'size': '12.1 MB',
          'disk_format': 'qcow2',
          'protected': '否',
          'visibility': '是',
          'id': 12345678,
          'minimum_disk': '',
          'minimum_ram': '',
          'description': '',
          'architecture': ''

        }],
        FlavorData: [{
          'id': '\'id\': 1,  \'name\': m1.tiny, \'vcpu\': 1,  \'ram\': 512MB, \'disk\': 1GB, \'公有\':是'

        }],
        NetworksData: [{}],
        Security_groupsData: [{}]

      }
    },

    created () {
      this.getData()
    },

    methods: {
      handleCurrentChange (val) {
        this.currentRow = val
        console.log(val)
      },
      handleCurrentChange_flavor (val) {
        this.currentRow_flavor = val
        console.log(val)
      },
      handleCurrentChange_network (val) {
        this.currentRow_network = val
        console.log(val)
      },
      /*toggleSelection (rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row)
          })
        } else {
          this.$refs.multipleTable.clearSelection()
        }
      },*/
      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      async getData () {
        this.axios.get('api/getServersList')
          .then(response => {
            this.content = response.data
            this.tableData = this.content
            console.log(this.content)
            console.log(typeof (this.content))
            if (this.content === 'not login in') {
              alert('请先登录！')
              this.$router.push('/Login')
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },

      async getImagesData () {
        this.axios.get('api/getImageList')
          .then(response => {
            this.content = response.data
            this.imagesTableData = this.content
            console.log(this.content)
            console.log(typeof (this.content))
            if (this.content === 'not login in') {
              alert('请先登录！')
              this.$router.push('/Login')
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },

      async getNetworkData () {
        this.axios.get('api/getNetworksList')
          .then(response => {
            this.content = response.data
            this.networkTableData = this.content
            console.log(this.content)
            console.log(typeof (this.content))
            if (this.content === 'not login in') {
              alert('请先登录！')
              this.$router.push('/Login')
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },

      async getFlavorData () {
        this.axios.get('api/getFlavorsList')
          .then(response => {
            this.content = response.data
            this.flavorTableData = this.content
            console.log(this.content)
            console.log(typeof (this.content))
            if (this.content === 'not login in') {
              alert('请先登录！')
              this.$router.push('/Login')
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },

      //启动单个服务器
      start_server_one (id) {
        this.fullscreenLoading = true
        this.axios.get('api/server/StartServerOne?server_id=' + id)
          .then(response => {
            console.log(response.data)
            this.fullscreenLoading = false

            this.content = response.data
            if (this.content === 'not login in') {
              alert('请先登录！')
              this.$router.push('/Login')
            } else {
              if (this.content === 202) {
                this.$message({
                  type: 'success',
                  message: '正在启动中...'
                })

              } else {
                this.$message({
                  type: 'error',
                  message: '启动失败!' + ' 返回信息：' + this.content
                })
              }

            }

          })
          .catch(function (error) {
            console.log(error)

          })

      },
      //停止单个服务器
      stop_server_one (id) {
        this.fullscreenLoading = true
        this.axios.get('api/server/StopServerOne?server_id=' + id)
          .then(response => {
            console.log(response.data)
            this.fullscreenLoading = false

            this.content = response.data
            if (this.content === 'not login in') {
              alert('请先登录！')
              this.$router.push('/Login')
            } else {
              if (this.content === 202) {
                this.$message({
                  type: 'success',
                  message: '正在停止该实例...'
                })

              } else {
                this.$message({
                  type: 'error',
                  message: '停止失败!' + ' 返回信息：' + this.content
                })
              }

            }

          })
          .catch(function (error) {
            console.log(error)

          })

      },

      //暂停单个服务器
      pause_server_one (id) {
        this.fullscreenLoading = true
        this.axios.get('api/server/PauseServerOne?server_id=' + id)
          .then(response => {
            console.log(response.data)
            this.fullscreenLoading = false

            this.content = response.data
            if (this.content === 'not login in') {
              alert('请先登录！')
              this.$router.push('/Login')
            } else {
              if (this.content === 202) {
                this.$message({
                  type: 'success',
                  message: '正在暂停该实例...'
                })

              } else {
                this.$message({
                  type: 'error',
                  message: '暂停失败!' + ' 返回信息：' + this.content
                })
              }

            }

          })
          .catch(function (error) {
            console.log(error)

          })

      },
      //恢复单个服务器
      unpause_server_one (id) {
        this.fullscreenLoading = true
        this.axios.get('api/server/UnpauseServerOne?server_id=' + id)
          .then(response => {
            console.log(response.data)
            this.fullscreenLoading = false

            this.content = response.data
            if (this.content === 'not login in') {
              alert('请先登录！')
              this.$router.push('/Login')
            } else {
              if (this.content === 202) {
                this.$message({
                  type: 'success',
                  message: '正在恢复该实例...'
                })

              } else {
                this.$message({
                  type: 'error',
                  message: '恢复失败!' + ' 返回信息：' + this.content
                })
              }

            }

          })
          .catch(function (error) {
            console.log(error)

          })

      },
      //重启单个服务器
      reboot_server_one (id, action) {
        this.fullscreenLoading = true
        this.axios.get('api/server/RebootServerOne?server_id=' + id + '&action=' + action)
          .then(response => {
            console.log(response.data)
            this.fullscreenLoading = false

            this.content = response.data
            if (this.content === 'not login in') {
              alert('请先登录！')
              this.$router.push('/Login')
            } else {
              if (this.content === 202) {
                this.$message({
                  type: 'success',
                  message: '正在重启该实例...'
                })

              } else {
                this.$message({
                  type: 'error',
                  message: '重启失败!' + ' 返回信息：' + this.content
                })
              }

            }

          })
          .catch(function (error) {
            console.log(error)

          })

      },

      //打开单个服务器控制台
      get_remote_consoles (id) {
        this.fullscreenLoading = true
        this.axios.get('api/server/GetRemoteConsoles?server_id=' + id)
          .then(response => {
            console.log(response.data)
            this.fullscreenLoading = false

            this.content = response.data
            if (this.content === 'not login in') {
              alert('请先登录！')
              this.$router.push('/Login')
            } else {
              if (this.content === 'error') {
                this.$message({
                  type: 'error',
                  message: '打开失败!' + ' 返回信息：' + this.content
                })

              } else {
                this.remote_consoles_url = this.content
                this.openServerConsoleDialogVisible = true

              }

            }

          })
          .catch(function (error) {
            console.log(error)

          })

      },

      //删除单个实例
      servers_delete_one (id) {
        console.log(id)
        this.$confirm('此操作将删除该服务器, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.fullscreenLoading = true
          this.axios.get('api/deleteServer?server_id=' + id)
            .then(response => {
              this.fullscreenLoading = false
              this.content = response.data
              if (this.content === 'not login in') {
                alert('请先登录！')
                this.$router.push('/Login')
              } else {
                if (this.content === 204) {
                  this.$message({
                    type: 'success',
                    message: '删除成功!'
                  })
                } else {
                  this.$message({
                    type: 'error',
                    message: '删除失败!' + ' 返回信息：' + this.content
                  })
                }

              }

            })
            .catch(function (error) {
              console.log(error)

            })

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })

      },
      handleClick () {
        alert('button click')
      },
      handleFile (response) {
        this.fileList.push(response.file)
      },

      handleExceed (files, fileList) {
        this.$message.warning(`最多上传 ${files.length} 个文件`)
      },
      OpencreateServerDialogVisible () {

        this.getImagesData()
        this.getNetworkData()
        this.getFlavorData()
        this.createServerDialogVisible = true

      },
      //  创建实例
      create_server_onsubmit () {
        let params = new FormData();
        params.append('name', this.server_name)
        params.append('imageRef', this.currentRow['id'])
        params.append('flavorRef', this.currentRow_flavor['id'])
        params.append('networks', this.currentRow_network['id'])
        console.log(params)

        this.axios.post('/api/createServer',params)
          .then(response => {
            this.content = response.data
            console.log(this.content)
            if (this.content === 'not login in') {
              alert('请先登录！')
              this.$router.push('/Login')
            } else {
              if (this.content === 202) {
                this.$message({
                  type: 'success',
                  message: '创建实例成功！'
                })
              } else {
                this.$message({
                  type: 'error',
                  message: '创建失败!' + ' 返回信息：' + this.content
                })
              }

            }
          })
          .catch(function (error) {
            console.log(error)
          })

      },



    }

  }
</script>

<style scoped>
  .el-dropdown {
    vertical-align: top;
  }

  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }

  .el-input {
    display: block;

  }

  .el-select {
    display: block;
  }

  .el-dialog__body {
    text-align: left;

  }
  .vnc_dialog {
    height: 600px;
  }


</style>
