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
          <el-dropdown split-button type="primary" @click="handleClick" size="small">
            启动
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>硬重启实例</el-dropdown-item>

              <el-dropdown-item>软重启实例</el-dropdown-item>
              <el-dropdown-item @click.native="edit_image_dialog_open(scope.row)">关闭实例</el-dropdown-item>

              <el-dropdown-item>更新元数据</el-dropdown-item>
              <el-dropdown-item @click.native="images_delete_one(scope.row.id)"
                                v-loading.fullscreen.lock="fullscreenLoading" divided>删除映像
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>

    </el-table>


    <!--创建映像弹窗-->
    <el-dialog title="启动实例" :visible.sync="createServerDialogVisible" width="500px">
      <el-form :model="form" label-width="100px" label-position="right">
        <el-form-item label="实例名称" :label-width="formLabelWidth">
          <el-input v-model="create_server_form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="可用区域" :label-width="formLabelWidth">
          <el-input v-model="create_server_form.availability_zone" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="映像" :label-width="formLabelWidth">
          <el-select v-model="create_server_form.imageRef" placeholder="请选择映像">
            <el-option label="cirros" value="cirros"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="flavor" :label-width="formLabelWidth">
          <el-select v-model="create_server_form.flavorRef" placeholder="请选择flavor">
            <el-option v-for="(item,index) in FlavorData" :label="item.id" value="iso" :key="index"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="网络" :label-width="formLabelWidth">
          <el-select v-model="create_server_form.networks" placeholder="请选择网络">
            <el-option label="provider" :value="create_server_form.networks"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="安全组" :label-width="formLabelWidth">
          <el-select v-model="create_server_form.security_groups" placeholder="请选择安全组">
            <el-option label="default" :value="create_server_form.security_groups"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="create_server_onsubmit">启动实例</el-button>
          <el-button @click="createServerDialogVisible = false">取消</el-button>
        </el-form-item>
      </el-form>

    </el-dialog>


  </div>

</template>

<script>
  export default {
    name: 'servers',
    components: {},
    data () {
      return {
        fullscreenLoading: false,
        multipleSelection: [],
        createServerDialogVisible: false,
        editImagesDialogVisible: false,
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
        tableData:[],
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
          'id': "'id': 1,  'name': m1.tiny, 'vcpu': 1,  'ram': 512MB, 'disk': 1GB, '公有':是"


        }],
        NetworksData: [{

        }],
        Security_groupsData: [{

        }]

      }
    },

    created () {
      this.getData()
    },

    methods: {
      toggleSelection (rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row)
          })
        } else {
          this.$refs.multipleTable.clearSelection()
        }
      },
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

      /*映像操作函数*/
      //删除单个映像
      images_delete_one (id) {
        console.log(id)
        this.$confirm('此操作将删除该映像, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.fullscreenLoading = true
          this.axios.get('api/images/delete_one?image_id=' + id)
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
                  window.location.reload()
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

        this.createServerDialogVisible = true


      },
      //  创建映像 上传
      create_server_onsubmit () {
        // const params = new URLSearchParams()
        // params.append('name', this.create_image_form.user)
        // params.append('imageRef', this.create_image_form.pass)
        // params.append('flavorRef', this.create_image_form.domain)
        // params.append('availability_zone', this.create_image_form.domain)
        // params.append('networks', this.create_image_form.domain)
        // params.append('security_groups', this.create_image_form.domain)
        this.axios.post('/api/createServer')
          .then(response => {
            this.content = response.data
            console.log(this.content)
            if (this.content === 202) {
              this.createServerDialogVisible = false
              this.$message({
                type: 'success',
                message: '创建实例成功，正在启动.....'
              })
            } else{
              this.createServerDialogVisible = false
              this.$message({
                type: 'error',
                message: '创建实例失败!'
              })
            }
          })
          .catch(function (error) {
            console.log(error)
          })

      },
      edit_image_dialog_open (row) {
        var ispublic
        if (row.visibility === '是') {
          ispublic = true
        } else {
          ispublic = false
        }

        var isprotected
        if (row.protected === '是') {
          isprotected = true
        } else {
          isprotected = false
        }
        this.edit_image_form = {
          name: row.name,
          description: row.description,
          kernel_id: '',
          ramdisk_id: '',
          architecture: row.architecture,
          format: row.disk_format,
          minimum_disk: row.minimum_disk,
          minimum_ram: row.minimum_ram,
          public: ispublic,
          protected: isprotected
        }
        console.log(this.edit_image_form)

        this.editImagesDialogVisible = true

      },
      // 编辑映像 上传
      edit_image_onsubmit () {

      }

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


</style>
